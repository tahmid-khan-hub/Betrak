import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function ErrorAlert({ title, description, onClose, } : 
    { title: string; description: string; onClose: () => void; }) {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
        <Alert variant="destructive" className="w-80 bg-black border-gray-700">
            <AlertCircleIcon className=" rounded-full mt-0.5"/>
            <AlertTitle>{title}</AlertTitle>
            <AlertDescription>
                {description}
            </AlertDescription>
        </Alert>
    </motion.div>
  );
}