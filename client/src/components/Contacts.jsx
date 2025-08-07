'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from '@/components/ui/form';

// ✅ Zod schema with dark mode validations
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[A-Za-z\s]+$/, 'Name can only contain letters and spaces'),
  email: z
    .string()
    .email('Enter a valid email address'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters'),
});

export default function Contacts() {
  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (values) => {
    try {
      await new Promise((res) => setTimeout(res, 1000)); // Simulate API

      toast.success('Message sent successfully!');
      console.log('Submitted:', values);
      form.reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="py-5 px-4 bg-background dark:bg-muted flex items-center justify-center" id="contacts">
      <div className="w-full max-w-2xl bg-card dark:bg-[#1f1f1f] p-8 rounded-2xl shadow-xl space-y-8 border-[2px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary dark:text-white mb-2" style={{ color: "rgb(66, 153, 170)" }}>
            Contact Us
          </h2>
          <p className="text-muted-foreground dark:text-gray-400 text-sm">
            Have a question or want to work together? Fill out the form below.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Message */}
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="dark:text-white">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Write your message..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
            type="submit"
            className="w-full border-gray-400 bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-500 hover:to-green-600 transition-all duration-300 ease-in-out font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 disabled:opacity-50"
            disabled={form.formState.isSubmitting}
            >
            {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>

          </form>
        </Form>
      </div>
    </div>
  );
}
