import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledJob = styled.div`
    padding: 20px 0;

    .top {
        margin-bottom: 10px;
    }

    .title {
        font-weight: bold;
        font-size: 18px;
        color: black;
    }

    .place {
        font-style: italic;
    }

    .years {
        text-align: left;
        margin-top: 10px;
        color: #086f25;
        font-weight: bold;

        @media ${props => props.theme.bootstrapBreakpoints.medium} {
            text-align: right;
            float: right;
            margin-top: 0;
        }
    }
`;

const Job = ({ title, place, years, description }) => (
    <StyledJob>
        <div className="row top">
            <div className="col-12 col-md-6">
                <span className="title">{title}</span>
                <span> - </span>
                <span className="place">{place}</span>
            </div>
            <div className="col-12 col-md-6">
                <div className="years">{years}</div>
            </div>
        </div>
        <div className="description"><ReactMarkdown source={description} linkTarget="_blank" /></div>
    </StyledJob>
);

export default Job;