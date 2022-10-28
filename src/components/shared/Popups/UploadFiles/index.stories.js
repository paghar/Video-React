//@flow
import React from 'react';
import UploadFiles from '.';
import { action } from '@storybook/addon-actions';
export default { title: 'UploadFiles' };

export const uploadFailed = () => (
  <UploadFiles
    backgroundColor="#303050"
    width="337px"    
    uploadedSize="200MB"
    totalUploadedSize="800GB"
    uploadedFiles="3"
    totalFiles="4"
    percent="70"
    isFailed    
    tryAgainClicked={action('clicked')}
    cancelClicked={action('clicked')}
  ></UploadFiles>
);

export const uplouding = () => (
  <UploadFiles
    backgroundColor="#303050"
    width="337px"    
    uploadedSize="200MB"
    totalUploadedSize="800GB"
    uploadedFiles="3"
    totalFiles="4"
    percent="80"    
    tryAgainClicked={action('clicked')}
    cancelClicked={action('clicked')}
  ></UploadFiles>
);
