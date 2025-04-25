import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from './Button';
import { Check } from 'lucide-react';

const waitlistSchema = z.object({
  fullName: z.string().min(2, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email' }),
  university: z.string().min(2, { message: 'University is required' }),
  arrivalDate: z.string().optional(),
  consent: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type WaitlistFormData = z.infer<typeof waitlistSchema>;

export function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      consent: false,
    }
  });
  
  const onSubmit = (data: WaitlistFormData) => {
    // In a real app, you would send this data to your backend
    console.log('Form data:', data);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };
  
  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 rounded-full bg-softYellow p-3 shadow-soft">
          <Check className="h-12 w-12 text-midnight" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">You're on the list!</h3>
        <p className="mb-6 text-gray-600">
          Thank you for joining our waitlist. We'll notify you when HomeBase launches for the August 2025 intake.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="secondary">
          Back to Form
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <input
          type="text"
          id="fullName"
          {...register('fullName')}
          className="mt-1 block w-full rounded-md border border-gray-200 px-3 py-2 shadow-soft focus:border-midnight focus:outline-none focus:ring-1 focus:ring-midnight"
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          {...register('email')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="university" className="block text-sm font-medium text-gray-700">
          University/College
        </label>
        <input
          type="text"
          id="university"
          placeholder="e.g., Niels Brock Business College"
          {...register('university')}
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
        {errors.university && (
          <p className="mt-1 text-sm text-red-600">{errors.university.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700">
          Expected Arrival Date (optional)
        </label>
        <input
          type="month"
          id="arrivalDate"
          {...register('arrivalDate')}
          min="2025-01"
          max="2025-12"
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
        />
      </div>
      
      <div className="flex items-start">
        <div className="flex h-5 items-center">
          <input
            id="consent"
            type="checkbox"
            {...register('consent')}
            className="h-4 w-4 rounded border-gray-300 text-midnight focus:ring-midnight"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="consent" className="font-medium text-gray-700">
            I agree to HomeBase's Privacy Policy and the processing of my data
          </label>
          {errors.consent && (
            <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>
          )}
          <p className="mt-1 text-xs text-gray-500">
            Your information will be used to notify you about our launch and important updates. We comply with GDPR requirements.
          </p>
        </div>
      </div>
      
      <div>
        <Button 
          type="submit" 
          variant="primary" 
          size="lg" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Join Waitlist'}
        </Button>
      </div>
    </form>
  );
}
