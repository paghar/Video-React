//@flow
import React from 'react';
import FolderCard from '.';
import { action } from '@storybook/addon-actions';
import image from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';
export default { title: 'Folder' };

export const Folder0items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={0}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[]}
  />
);

export const Folder1items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experiencndbfsbvbsnvnsbvnsnv sbvmnsbvmnbnv bbn vbns vbn bnv nbfv bfs vhjsbhjfhsbfhjsbfhjsbhfjbshjfe"
    width={255}
    fileCount={1}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image]}
  />
);

export const Folder2items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={2}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image]}
  />
);

export const Folder3items = () => (
  <FolderCard
    clicked={action('clicked')}
    selected
    name="Hiking Experience"
    width={255}
    fileCount={3}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image]}
  />
);

export const Folder4items = () => (
  <FolderCard
    clicked={action('clicked')}
    selected
    name="Hiking Experience"
    width={255}
    fileCount={4}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image]}
  />
);

export const Folder5items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={5}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
  />
);

export const Folder6items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={6}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
  />
);

export const Folder7items = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={455}
    fileCount={7}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
  />
);

export const Folder7itemsSelected = () => (
  <FolderCard
    clicked={action('clicked')}
    selected
    name="Hiking Experience"
    width={255}
    fileCount={7}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
  />
);
export const Folder0itemsEx = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={0}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[]}
    expanded
  />
);
export const Folder1itemsEx = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experiencndbfsbvbsnvnsbvnsnv sbvmnsbvmnbnv bbn vbns vbn bnv nbfv bfs vhjsbhjfhsbfhjsbfhjsbhfjbshjfe"
    width={255}
    fileCount={1}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image]}
    expanded
  />
);
export const Folder2itemsEx = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={2}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image]}
    expanded
  />
);
export const Folder3itemsExSelected = () => (
  <FolderCard
    clicked={action('clicked')}
    selected
    name="Hiking Experience"
    width={255}
    fileCount={3}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image]}
    expanded
  />
);
export const Folder4itemsExSelected = () => (
  <FolderCard
    clicked={action('clicked')}
    selected
    name="Hiking Experience"
    width={255}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    fileCount={4}
    thumbnails={[image, image, image, image]}
    expanded
  />
);
export const Folder5itemsEx = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={5}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
    expanded
  />
);
export const Folder6itemsEx = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={255}
    fileCount={6}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
    expanded
  />
);
export const Folder7itemsExSelected = () => (
  <FolderCard
    clicked={action('clicked')}
    name="Hiking Experience"
    width={455}
    fileCount={7}
    uploader="Emily Parkson"
    fileSize="12 MB"
    fileDuration="05:02"
    fileUploadDate={1553277015000}
    thumbnails={[image, image, image, image, image]}
    expanded
    selected
  />
);
