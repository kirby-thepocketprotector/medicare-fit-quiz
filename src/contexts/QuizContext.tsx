'use client';

import { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { QuizAnswers, initialQuizAnswers, calculateIsInIEP, determineResult, ResultScreenId } from '@/constants/quiz-data';

interface QuizContextType {
  answers: QuizAnswers;
  currentStep: number;
  totalSteps: number;
  setCurrentStep: (step: number) => void;
  updateAnswer: <K extends keyof QuizAnswers>(key: K, value: QuizAnswers[K]) => void;
  setBirthDate: (month: string, year: string) => void;
  toggleVAPreference: (preferenceId: string) => void;
  getResult: () => ResultScreenId;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

const STORAGE_KEY = 'medicare-quiz-answers';
const STEP_STORAGE_KEY = 'medicare-quiz-step';

// Helper function to safely access localStorage
const getStoredAnswers = (): QuizAnswers | null => {
  if (typeof window === 'undefined') return null;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return null;
  }
};

const getStoredStep = (): number => {
  if (typeof window === 'undefined') return 0;
  try {
    const stored = localStorage.getItem(STEP_STORAGE_KEY);
    return stored ? parseInt(stored, 10) : 0;
  } catch (error) {
    console.error('Error reading step from localStorage:', error);
    return 0;
  }
};

export function QuizProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<QuizAnswers>(() => {
    return getStoredAnswers() || initialQuizAnswers;
  });
  const [currentStep, setCurrentStepState] = useState(() => getStoredStep());
  const [totalSteps] = useState(10);

  // Persist answers to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
      } catch (error) {
        console.error('Error saving to localStorage:', error);
      }
    }
  }, [answers]);

  // Persist current step to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STEP_STORAGE_KEY, currentStep.toString());
      } catch (error) {
        console.error('Error saving step to localStorage:', error);
      }
    }
  }, [currentStep]);

  const setCurrentStep = useCallback((step: number) => {
    setCurrentStepState(step);
  }, []);

  const updateAnswer = useCallback(<K extends keyof QuizAnswers>(
    key: K,
    value: QuizAnswers[K]
  ) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }, []);

  const setBirthDate = useCallback((month: string, year: string) => {
    const isInIEP = calculateIsInIEP(month, year);
    setAnswers((prev) => ({
      ...prev,
      birthMonth: month,
      birthYear: year,
      isInIEP,
    }));
  }, []);

  const toggleVAPreference = useCallback((preferenceId: string) => {
    setAnswers((prev) => {
      let newPreferences: string[];

      if (preferenceId === 'none_apply') {
        if (prev.vaPreferences.includes('none_apply')) {
          newPreferences = [];
        } else {
          newPreferences = ['none_apply'];
        }
      } else {
        const withoutNone = prev.vaPreferences.filter((p) => p !== 'none_apply');
        if (withoutNone.includes(preferenceId)) {
          newPreferences = withoutNone.filter((p) => p !== preferenceId);
        } else {
          newPreferences = [...withoutNone, preferenceId];
        }
      }

      return { ...prev, vaPreferences: newPreferences };
    });
  }, []);

  const getResult = useCallback((): ResultScreenId => {
    return determineResult(answers);
  }, [answers]);

  const resetQuiz = useCallback(() => {
    setAnswers(initialQuizAnswers);
    setCurrentStepState(0);
    // Clear localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(STEP_STORAGE_KEY);
      } catch (error) {
        console.error('Error clearing localStorage:', error);
      }
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        answers,
        currentStep,
        totalSteps,
        setCurrentStep,
        updateAnswer,
        setBirthDate,
        toggleVAPreference,
        getResult,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}
