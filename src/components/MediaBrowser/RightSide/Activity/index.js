//@flow
import React, { useState, useRef, useEffect } from 'react';
import ActivityItem from './ActivityItem';
import type { ActivityType } from './ActivityItem';
import TimeSeprator from './TimeSeprator';
import { getActivityTime, getToday } from 'helpers/time';
import { Scrollbars } from 'react-custom-scrollbars';
import { Generals } from 'theme/colors';
import { Shadow, StyledIcon, StyledThumb, StyledTrack } from './index.style';
type Props = {
  activities: Array<ActivityType>,
  className?: string,
};

const Activity = ({ activities, className }: Props) => {
  //Ref for ScrollBar
  const scrollBarRef = useRef();
  //State for showing shadow in scrollbar
  const [isShadowShown, setIsShadowShown] = useState(false);
  //detect if there is scrolling
  useEffect(() => {
    const currentScrollBar = scrollBarRef.current;
    if (currentScrollBar) {
      const scrollHeight = currentScrollBar.getScrollHeight();
      const clientHeight = currentScrollBar.getClientHeight();
      if (scrollHeight > clientHeight) {
        setIsShadowShown(true);
      }
    }
  }, [activities, setIsShadowShown]);
  //Hide the shadow box when scrolling
  const handleScrollStart = () => {
    setIsShadowShown(false);
  };
  //style of scroll thumb
  const renderThumb = ({ style }) => {
    return <StyledThumb style={style} />;
  };
  //style of scroll track
  const renderTrackVertical = ({ style }) => {
    return <StyledTrack style={style} />;
  };
  const activityList = activities.map((activity, id) => {
    const {
      name,
      createdAt,
      avatarSrc,
      text,
      avatarColor,
      shortName,
    } = activity;
    let prev = id ? getActivityTime(activities[id - 1]) : getToday();
    let current = getActivityTime(activities[id]);
    return (
      <React.Fragment key={id}>
        {(current !== prev || (id === 0 && current === prev)) && (
          <TimeSeprator time={createdAt} />
        )}
        <ActivityItem
          shortName={shortName}
          avatarSrc={avatarSrc}
          name={name}
          createdAt={createdAt}
          text={text}
          avatarColor={avatarColor}
        />
      </React.Fragment>
    );
  });
  return (
    <Scrollbars
      className={className}
      autoHide
      ref={ref => (scrollBarRef.current = ref)}
      renderThumbVertical={renderThumb}
      renderTrackVertical={renderTrackVertical}
      onScrollStart={handleScrollStart}
    >
      {activityList}
      {isShadowShown && (
        <Shadow>
          <StyledIcon fontSize="15px" color={Generals.vii} iconNumber="61560" />
        </Shadow>
      )}
    </Scrollbars>
  );
};

export default Activity;
