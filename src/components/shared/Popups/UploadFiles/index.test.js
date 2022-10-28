//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import PopupUploadFiles from '.';

describe('<PopupUploadFiles/>', () => {
  it('uploadFailed', () => {
    const tree = renderer
      .create(
        <PopupUploadFiles
          backgroundColor="#303050"
          width="337px"         
          uploadedSize="200MB"
          totalUploadedSize="800GB"
          uploadedFiles="3"
          totalFiles="4"
          percent="70"
          isFailed         
        ></PopupUploadFiles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('uplouding', () => {
    const tree = renderer
      .create(
        <PopupUploadFiles
          backgroundColor="#303050"
          width="337px"          
          uploadedSize="200MB"
          totalUploadedSize="800GB"
          uploadedFiles="3"
          totalFiles="4"
          percent="80"         
        ></PopupUploadFiles>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('cancel click', () => {
    const cancelClick = jest.fn();
    const wrapper = mount(
      <PopupUploadFiles
        backgroundColor="#303050"
        width="337px"        
        uploadedSize="200MB"
        totalUploadedSize="800GB"
        uploadedFiles="3"
        totalFiles="4"
        percent="80"           
        cancelClicked={cancelClick}
      ></PopupUploadFiles>
    );
    wrapper
      .find('button')
      .at(0)
      .simulate('click');
    expect(cancelClick).toHaveBeenCalled();
  });

  it('tryAgain click', () => {
    const tryAgainClick = jest.fn();
    const wrapper = mount(
      <PopupUploadFiles
        backgroundColor="#303050"
        width="337px"       
        uploadedSize="200MB"
        totalUploadedSize="800GB"
        uploadedFiles="3"
        totalFiles="4"
        percent="80"
        isFailed        
        tryAgainClicked={tryAgainClick}
      ></PopupUploadFiles>
    );
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(tryAgainClick).toHaveBeenCalled();
  });
});
