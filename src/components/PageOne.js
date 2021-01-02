import { motion } from "framer-motion";

const PageOne = props =>  {
  return (
    <motion.div 
      className="page page-one"
      initial="hidden" 
      animate="visible" 
      exit="hidden"
      variants={ props.variants }
      transition={ props.transition } >
      <h1>Page One</h1>
    </motion.div>
  );
}

export default PageOne;