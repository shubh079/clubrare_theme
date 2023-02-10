import React from "react";

import { FooterProps } from "./interface";

export const Footer: React.FC<FooterProps> = ({ className = "", children }) => {
  return (
    <footer className="bg-neutral-700 px-2 py-4 dark:bg-neutral-200 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-start md:gap-0 ">
        <div className="flex items-start "></div>
        <div className="order-last pt-0 md:order-none">
          <ul className="mb-2 flex justify-center">
            <li className="px-2"></li>
          </ul>
        </div>
        <div className="flex pt-0 ">
          <ul className="flex w-full justify-end sm:justify-center">
            <li className="whitespace-nowrap px-3 font-Roboto text-caption font-normal leading-small text-neutral-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-neutral-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Docs
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-neutral-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Terms
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-neutral-400 dark:text-neutral-600">
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
