//@flow
import React, { useState, useRef, useEffect } from 'react';
import { SequenceHolder, SequencesWrapper, OffsetBar } from './index.style';

type SequenceSizeType = {
  width: number,
  height: number,
};

type Props = {
  sequencesSrc: string,
  sequencesCount: number,
  sequenceSize: SequenceSizeType,
  className?: string,
  expanded?: boolean,
};

const VideoSequences = ({
  className,
  sequencesSrc,
  sequencesCount,
  sequenceSize,
  expanded,
}: Props) => {
  const wrapperRef = useRef(null); // ref to component wrapper

  // This function calculates where shouldbe sequences image position
  const calculateSequenceOffset = currentSequence => {
    if (wrapperRef.current) {
      const {
        width: wrapperWidth,
      } = wrapperRef.current.getBoundingClientRect();
      return (
        (Math.floor(currentSequence) * sequenceSize.height) /
        (sequenceSize.width / wrapperWidth)
      );
    } else {
      return 0;
    }
  };

  const [barOffset, setBarOffset] = useState(-1); // bar x offset to be used in translateX
  const [sequencesOffset, setSequencesOffset] = useState(0); // sequences offset y to be used in backgroundPositionY

  // This function handles moving bar and changing sequence number according to mouse position to be shown
  const handleMouseMove = ({ pageX }) => {
    if (wrapperRef.current) {
      const {
        x: wrapperX,
        left: wrapperLeft,
        width: wrapperWidth,
      } = wrapperRef.current.getBoundingClientRect();

      const barOffset = pageX - (wrapperX || wrapperLeft);
      const currentSequence = (barOffset / wrapperWidth) * sequencesCount;
      const sequencesOffset = calculateSequenceOffset(currentSequence);
      setBarOffset(barOffset);
      setSequencesOffset(sequencesOffset);
    }
  };

  // This function hides bar and reset sequence on mouse out
  const resetToMiddleSequence = () => {
    setBarOffset(-1);
    setSequencesOffset(calculateSequenceOffset(sequencesCount / 2));
  };

  useEffect(() => {
    resetToMiddleSequence();
  }, [expanded]);

  return (
    <SequencesWrapper
      className={className}
      onMouseMove={handleMouseMove}
      onMouseOut={resetToMiddleSequence}
      ref={wrapperRef}
    >
      {barOffset >= 0 && (
        <OffsetBar style={{ transform: `translateX(${barOffset}px)` }} />
      )}
      <SequenceHolder
        style={{ backgroundPositionY: `-${sequencesOffset}px` }}
        sequencesSrc={sequencesSrc}
      />
    </SequencesWrapper>
  );
};

export default VideoSequences;
