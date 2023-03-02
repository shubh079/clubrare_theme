import React from "react";
import { HeaderProps } from "./interface";

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="bg-gray-700 px-2 py-4 lg:px-8">
      <div className=" items-center justify-between gap-4 md:items-start md:gap-0 ">
        <div className="flex pt-0 ">
          <ul className="flex w-full justify-end ">
            <li className="whitespace-nowrap px-3 font-Roboto text-caption font-normal leading-small text-gray-400  dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Home
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                About Us
              </a>
            </li>
            <li className="px-3 font-Roboto text-caption font-normal leading-small text-gray-400 dark:text-neutral-600">
              <a href={""} target="_blank" rel="noreferrer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
