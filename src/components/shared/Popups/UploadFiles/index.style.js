//@flow
import styled from 'styled-components'
import Typography from 'components/shared/Typography'
import Button from 'components/shared/Button'
import { Generals } from 'theme/colors'

export const Wrapper = styled.div`
  background-color:${({ backgroundColor }) => backgroundColor}  
  width: ${({ width }) => width};  
  border-radius: 5px;  
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 29px 0 #000000;
`

export const Title = styled(Typography)`
  margin: 5px 0px 0px 10px;
`

export const ProgressBarRow = styled.div`
  margin: 4px 0px 0px 10px;
  display: flex;
  align-items: center;
`

export const ProgressBar = styled.div`
  width: 88%;
  height: 5px;
  background-color: ${Generals.v};
  border-radius: 5px;
  margin-right: 11px;
  position: relative;

  & > span {
    display: block;
    width: ${({ progressBarWith }) => progressBarWith}%;
    transition: width 400ms linear;
    height: 100%;
    border-radius: 20px;
    ${({ isFailed }) =>
      isFailed
        ? `
           box-shadow: 0px 0px 6px 1px rgba(255, 0, 70, 0.55);
           background: linear-gradient(
             90deg,
             rgba(121, 0, 33, 1) 0%,
             rgba(246, 22, 84, 1) 100%
           );       
       `
        : `
            box-shadow: 0px 0px 6px 1px rgba(50, 123, 250, 0.43);
            background: linear-gradient(
            90deg,
            rgba(0, 69, 187, 1) 0%,
            rgba(0, 177, 255, 1) 100%
            );

         `}

    position: relative;
    overflow: hidden;
  }
`
export const CloseBtn = styled(Button)`
  padding: 2px 4px;
`

export const DescriptionRow = styled.div`
  margin: 4px 0px 8px 10px;
  display: flex;
  align-items: center;
`

export const TryAgainBtn = styled(Button)`
  margin-right: 11px;
  padding: 4px 12px 4px 12px;
`

export const InfoText = styled(Typography)`
  margin-right: 6px;
`
