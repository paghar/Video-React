//@flow
import React from 'react';
import {
  Wrapper,
  VersionDetailRow,
  SubTitle,
  ButtonsWrapper,
  VersionWrapper,
  UnversionAllBtn,
  TitleWrapper,
  VersionDetailComponet,
} from './index.style';
import Typography from 'components/shared/Typography';
import { Title2, Display2 } from 'theme/fonts';
import { Generals, Primary } from 'theme/colors';
import Button from 'components/shared/Button';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import type { versionsListType } from './VersionDetail';

type Props = {
  versionsList: Array<versionsListType>,
  closeClicked: () => void,
  unversionAllClicked: () => void,
  assetUnversioned: (id: number) => void,
  className?: string,
};

function ManageVersions({
  versionsList,
  closeClicked,
  unversionAllClicked,
  assetUnversioned,
  className,
}: Props) {
  function handleDragEnd(destination, source) {
    if (!destination) {
      return;
    }

    if (destination.index === source.index) {
      return;
    }
  }

  return (
    <Wrapper className={className}>
      <TitleWrapper>
        <Typography font={Title2} color={Generals.ii} hoverable>
          Manage versions
        </Typography>
        <Button
          rtl
          backgroundColor={Generals.viii}
          radius="50%"
          paddingRight="0px"
          icon="61453"
          iconSize="14px"
          iconColor={Generals.vii}
          clicked={closeClicked}
        />
      </TitleWrapper>

      <SubTitle font={Display2} color={Generals.vi} hoverable>
        {versionsList.length} versions
      </SubTitle>

      <VersionWrapper hasScroll={versionsList.length >= 6}>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="droppable">
            {({ droppableProps, innerRef, placeholder }) => {
              return (
                <div {...droppableProps} ref={innerRef}>
                  {versionsList.map(
                    (
                      {
                        id,
                        versionNumber,
                        thumbnailUrl,
                        assetName,
                        assetDetail,
                      },
                      index
                    ) => {
                      return (
                        <Draggable
                          key={id}
                          draggableId={id.toString()}
                          index={index}
                        >
                          {(
                            { innerRef, draggableProps, dragHandleProps },
                            { isDragging }
                          ) => {
                            return (
                              <div
                                ref={innerRef}
                                {...draggableProps}
                                {...dragHandleProps}
                              >
                                <VersionDetailRow isDragging={isDragging}>
                                  <VersionDetailComponet
                                    key={id}
                                    id={id}
                                    versionNumber={versionNumber}
                                    thumbnailUrl={thumbnailUrl}
                                    assetName={assetName}
                                    assetDetail={assetDetail}
                                    closeClicked={() => assetUnversioned(id)}
                                  ></VersionDetailComponet>
                                </VersionDetailRow>
                              </div>
                            );
                          }}
                        </Draggable>
                      );
                    }
                  )}
                  {placeholder}
                </div>
              );
            }}
          </Droppable>
        </DragDropContext>
      </VersionWrapper>

      <ButtonsWrapper>
        <UnversionAllBtn
          backgroundColor={Primary.Dim}
          hoverBackgroundColor={Primary.Light}
          activeBackgroundColor={Primary.Dark}
          radius="5px"
          clicked={unversionAllClicked}
        >
          <Typography font={Display2} color={Generals.viii} hoverable>
            Unversion All
          </Typography>
        </UnversionAllBtn>
      </ButtonsWrapper>
    </Wrapper>
  );
}

export default ManageVersions;
