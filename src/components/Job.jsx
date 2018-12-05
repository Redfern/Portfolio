import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const StyledJob = styled.div`
    padding: 20px 0 0 0;

    .top {
        margin-bottom: 10px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: stretch; 
    }

    .title-place {
        flex-basis: 100%;

        @media ${props => props.theme.bootstrapBreakpoints.medium} {
            flex-basis: 50%;
        }
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
        flex-basis: 100%;

        @media ${props => props.theme.bootstrapBreakpoints.medium} {
            flex-basis: 50%;
            text-align: right;
            margin-top: 0;
        }
    }
`;

const Job = ({ title, place, years, description }) => (
    <StyledJob>
        <div className="top">
            <div className="title-place">
                <span className="title">{title}</span>
                <span> - </span>
                <span className="place">{place}</span>
            </div>
            <div className="years">{years}</div>
        </div>
        <div className="description"><ReactMarkdown source={description} renderers={{link : markdownLinkRenderer}} /></div>
    </StyledJob>
);

const markdownLinkRenderer = (props) => {
    return props.href.startsWith("/") ?
      <a href={props.href}>{props.children}</a> :
      <a href={props.href} target="_blank" rel="nofollow noopener noreferrer">{props.children}</a>;
  }

export default Job;