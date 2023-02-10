import {
  GlobeAmericasIcon,
  QuestionMarkCircleIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import classnames from "classnames";
import { NextRouter } from "next/router";

/* I dont know why but I need the router that is
    instanciated in the parent component */
const Nav: React.FC<{ router: NextRouter }> = ({
  router,
}: {
  router: NextRouter;
}) => {
  return (
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        className="hidden justify-between items-center w-full md:flex md:w-auto"
        id="mobile-menu-2"
      >
        <ul className="flex flex-col p-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium transition-all duration-1000 ease-linear">
          <li>
            <Link href="/" legacyBehavior>
              <a
                className={classnames(
                  "flex items-center py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 hover:text-gray-300",
                  {
                    "text-white": router.pathname === "/",
                    "text-gray-500": router.pathname !== "/",
                  }
                )}
              >
                <Squares2X2Icon className="w-6 h-6 mr-2" />
                <span>Projects</span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news" legacyBehavior>
              <a
                className={classnames(
                  "flex items-center py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 hover:text-gray-300",
                  {
                    "text-white": router.pathname === "/news",
                    "text-gray-500": router.pathname !== "/news",
                  }
                )}
              >
                <GlobeAmericasIcon className="w-6 h-6 mr-2" />
                <span>News</span>
              </a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/how-it-works">
              <a
                className={classnames(
                  "flex items-center py-2 pr-4 pl-3 rounded md:bg-transparent md:p-0 hover:text-gray-300",
                  {
                    "text-white": router.pathname === "/how-it-works",
                    "text-gray-500": router.pathname !== "/how-it-works",
                  }
                )}
              >
                <QuestionMarkCircleIcon className="w-6 h-6 mr-2" />
                <span>How It Works</span>
              </a>
            </Link>
          </li>
        </ul>
      </motion.div>
  );
};

export default Nav;
