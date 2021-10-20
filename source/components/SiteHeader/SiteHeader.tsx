import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import Phone from '@material-design-icons/svg/filled/local_phone.svg';

import shopSign from 'ASSETS/images/shop-sign.jpg';
import mainNavItems from 'CONFIG/main-nav';

import { Link, List, ListItem } from 'Atoms';

import { FullWidthContainer, StoreHours } from 'Components';
import { Routes } from 'API/config/site-map';

const SiteHeader: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  return (
    <FullWidthContainer
      className={classnames('relative bg-white shadow-lg', parentClasses)}
    >
      {({ ChildContainer }) => (
        <ChildContainer>
          <header
            className="flex items-end justify-between"
            style={{ height: '150px' }}
          >
            <div className="h-full p-2">
              <NavLink to={Routes.HOME}>
                <img className="h-full" src={shopSign} alt="Montgomery Auto" />
              </NavLink>
            </div>
            {/* <div className="flex flex-col justify-end h-full"> */}
            <nav className="flex flex-col items-end">
              <div className="mb-3">
                <Link
                  className="flex justify-center border-white rounded-md text-scale-n1 border-1"
                  href="tel:+12155769305"
                  target="_blank"
                >
                  <Phone className="mr-1" />
                  (215) 576-9305
                </Link>
                <StoreHours />
              </div>
              <List
                className="flex leading-none border-white font-coffee text-scale-6 pl-50 md:pl-100 border-b-1"
                isOrdered={false}
              >
                {mainNavItems.map((navItem, index) => {
                  return (
                    <ListItem
                      className={classnames({ 'ml-3': index > 0 }, 'px-1')}
                      key={index}
                    >
                      <NavLink to={navItem.href}>{navItem.text}</NavLink>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
            {/* </div> */}
          </header>
        </ChildContainer>
      )}
    </FullWidthContainer>
  );
};

export default SiteHeader;
