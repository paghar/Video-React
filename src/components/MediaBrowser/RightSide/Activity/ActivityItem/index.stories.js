//@flow
import React from 'react';
import ActivityItem from '.';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
export default { title: 'Activity' };
const item = {
  avatarSrc: image,
  name: 'Sara Parker',
  shortName: 'SP',
  createdAt: 1570700342376,
  text: 'Uploaded "aportman family"',
  avatarColor: '#fff',
  avatarBackgroundColor: '#5c4dff',
};
export const ActivityMenu = () => (
  <ActivityItem
    avatarSrc={item.avatarSrc}
    name={item.name}
    createdAt={item.createdAt}
    text={item.text}
    avatarColor={item.avatarColor}
    shortName={item.shortName}
  />
);
