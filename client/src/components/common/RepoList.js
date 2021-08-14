import React from 'react';
import PrIcon from './PrIcon';
import PrStatusIcon from '../common/PrStatusIcon';

const RepoList = ({ apiData }) => {
    const getRepoDate = (date) => {
        let defaultDate = new Date(date);
        return defaultDate
            .toString()
            .replace('GMT+0530 (India Standard Time)', '');
    };

    return apiData.items.map((repo) => (
        <div key={repo.id} className="repoDiv">
            <h4>
                <PrIcon state={repo.state} />
                {repo.repository_url.replace(
                    'https://api.github.com/repos/',
                    ''
                )}
            </h4>
            <p>
                <PrStatusIcon prStatus={repo.prStatus} />
                {'  '}
                {repo.title}
            </p>
            <p>
                <i className="far fa-clock"></i> {getRepoDate(repo.created_at)}
            </p>
        </div>
    ));
};

export default RepoList;
