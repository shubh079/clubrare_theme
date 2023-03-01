import React from "react";

import { FooterProps } from "./interface";

export const Footer: React.FC<FooterProps> = ({ className = "", children }) => {
  return (
    <footer className="bg-black px-2 py-4 lg:px-8">
      <div className=" items-center justify-between gap-4 md:items-start md:gap-0 ">
        <div className="flex pt-0 ">
          <ul className="flex w-full justify-end sm:justify-center">
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Docs
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Terms
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-gray-600">
              <a href={""} target="_blank" rel="noreferrer">
                Privacy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
