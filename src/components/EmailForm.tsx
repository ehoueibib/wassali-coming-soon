import { useState } from 'react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      toast.success("Thanks for signing up! We'll keep you posted.");
      setEmail('');
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="w-full max-w-md mx-auto space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="flex gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t('notify.placeholder')}
          className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          whileFocus={{ scale: 1.02 }}
          required
        />
        <motion.button 
          type="submit" 
          className="notify-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t('notify.button')}
        </motion.button>
      </motion.div>
      <motion.p 
        className="text-sm text-gray-500 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {t('notify.privacy')}
      </motion.p>
    </motion.form>
  );
};

export default EmailForm;