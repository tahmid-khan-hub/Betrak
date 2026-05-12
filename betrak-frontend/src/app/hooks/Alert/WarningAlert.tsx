import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

export function WarningAlert({ title, description, onClose, } :
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
        <Alert className="w-80 bg-gray-900 border-yellow-500/50">
            <AlertTriangleIcon className="bg-yellow-500 mt-0.5"/>
            <AlertTitle className="text-yellow-400">{title}</AlertTitle>
            <AlertDescription className="text-yellow-400/70">
                {description}
            </AlertDescription>
        </Alert>
    </motion.div>
  );
}
