import {useState} from "react";
import {motion} from "framer-motion";

const Box1 = () => {
    const [isAnimating, setIsAnimating] = useState(false)

    return(
        <div className="box-container">
            <motion.div
                className="box"

                initial={{
                    opacity: 0.5
                }}
                animate={{
                    x: isAnimating ? '65rem' : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 360 : 0,
                }}
                transition={{
                    // duration: 1,
                    type: 'spring',
                    stiffness: 60,
                    damping: 6
                }}

                onClick={() => setIsAnimating(!isAnimating)}
            />
        </div>
    )
}

export default Box1