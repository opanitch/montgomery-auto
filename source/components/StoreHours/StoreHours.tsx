import React, { FunctionComponent, useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

import Clock from '@material-design-icons/svg/outlined/watch_later.svg';
import DownArrow from '@material-design-icons/svg/filled/keyboard_arrow_down.svg';
import RightArrow from '@material-design-icons/svg/filled/keyboard_arrow_right.svg';

import { Button, Link, List, ListItem } from 'Atoms';

import { Routes } from 'API/config/site-map';

enum DaysOfTheWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

const storeHours = new Map();

storeHours.set(DaysOfTheWeek.MONDAY, {
  close: '5 PM',
  open: '8 AM',
});
storeHours.set(DaysOfTheWeek.TUESDAY, {
  close: '5 PM',
  open: '8 AM',
});
storeHours.set(DaysOfTheWeek.WEDNESDAY, {
  close: '5 PM',
  open: '8 AM',
});
storeHours.set(DaysOfTheWeek.THURSDAY, {
  close: '5 PM',
  open: '8 AM',
});
storeHours.set(DaysOfTheWeek.FRIDAY, {
  close: '5 PM',
  open: '8 AM',
});
storeHours.set(DaysOfTheWeek.SATURDAY, {
  close: '1 PM',
  open: '10 AM',
});
storeHours.set(DaysOfTheWeek.SUNDAY, {
  close: '',
  open: '',
});

const StoreHours: FunctionComponent<DivType> = ({
  className: parentClasses,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const currentDay = useMemo(() => {
    const date = new Date().getDay();

    return new Intl.DateTimeFormat('en-US', { weekday: 'long' })
      .format(date)
      .toUpperCase();
  }, []);
  const todaysHours = useMemo(() => storeHours.get(currentDay), [currentDay]);

  console.log(currentDay);

  return (
    <div className={classnames('relative flex', parentClasses)}>
      <Button className="flex" onClick={() => setIsExpanded(!isExpanded)}>
        <Clock className="mr-2" />
        {`${todaysHours.open} - ${todaysHours.close}`}
        {!isExpanded ? <RightArrow /> : <DownArrow />}
      </Button>
      <div className={classnames(!isExpanded && 'hidden')}></div>
    </div>
  );
};

export default StoreHours;
