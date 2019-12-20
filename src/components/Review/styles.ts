import { styled } from '../../styles';
import { StyledAvatar } from '../Avatar/styles'

export interface IStyledReviewStarsProps {
    rating: number;
  }

const ReviewStars = styled.div<IStyledReviewStarsProps>`
    color: gold;

    .ReviewStars-full {
        display: inline-block;
        left: 0;
        overflow-x: hidden;
        position: absolute;
        top: 0;
        transition: width 0.5s ease;
        white-space: nowrap;
        width: ${props => (props.rating / 5) * 100}%;
    }

    .ReviewStars-outline {
        display: inline-block;
        position: relative;
    }

    span {
        font-size: 20px;
        height: 20px;
        position: relative;
        width: 20px;
    }
`;

const Review = styled.div`
    display: flex;
    margin-bottom: 55px;

    ${StyledAvatar} {
        margin-right: 34px;
    }

    ${ReviewStars} {
        margin-right: 24px;
    }

    .Review {
        &-content {
            border-bottom: 1px solid #ECECEC;
            padding-bottom: 40px;
        }

        &-info {
            display: flex;
            margin-bottom: 32px;
            width: 100%;

            &-left {
            }

            &-right {
                align-items: center;
                display: flex;
                margin-left: auto;

                strong {
                    font-size: 24px;
                    margin-right: 10px;
                }
            }
        }
    }

    ${props => props.theme.media.md} {

    }
`;

export { Review, ReviewStars };
