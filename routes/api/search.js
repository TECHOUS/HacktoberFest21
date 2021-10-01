const express = require('express');
const router = express.Router();
const axios = require('axios');

/**
 * EndPoint: /api/v1/search?username=<username>
 * 
 * @access public
 * @author gauravw
 * @copyright techous
 * @description this is the search API for checking hacktober fest 20
 * @param username
 * 
 **/
router.get('/search', (req, res) => {
    const { username } = req.query;

    if (!username || username === '') {
        res.status(400).send({ status: 400, message: 'Invalid User Name' });
    } else {
        let url = process.env.url.replace('${username}', username);
        
        axios.get(
                url
                ,{
                    headers: {
                        'Authorization': `token ${process.env.token}`
                    }
                }
            )
            .then((response) => {
                if(response.status === 200){
                    let result = {...response.data,"status":200};
                    let items = result.items;
                    let valid_count = 0;
                    for(let i=0;i<items.length;i++){
                        let labels = items[i].labels.filter(label => label.name==='hacktoberfest-accepted');

                        if(labels.length>0 && items[i].state==='closed'){
                            items[i] = {...items[i],"prStatus":"right"}
                            valid_count++;
                        }else if(labels.length>0 || items[i].state==='closed'){
                            items[i] = {...items[i],"prStatus":"pending"}
                        }else{
                            items[i] = {...items[i],"prStatus":"wrong"}
                        }
                    }
                    res.json({...result,items,valid_count});
                }else{
                    res.status(400).json({ status: 400, message: 'Bad Request'});
                }
            })
            .catch((err) => {
                res.status(404).json({ status: 404, message: 'No Data Found !'});
            });
    }
});

// API for testing purposes only
router.get('/search/mocktwelve', (req,res)=>{
    const { username } = req.query;
    if (!username || username === '') {
        setTimeout(()=>{
            res.status(400).send({ status: 400, message: 'Invalid User Name' })
        }, 4000);
    } else {
        res.json({
            "total_count": 12,
            "valid_count": 5,
            "incomplete_results": false,
            "status": 200,
            "items": [
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/10",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/10/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/10/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/10/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/10",
                    "id": 718785206,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NTAxMDk5NTY5",
                    "number": 10,
                    "title": "Updated the website for releasing.",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2415150801,
                            "node_id": "MDU6TGFiZWwyNDE1MTUwODAx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "ad380d",
                            "default": false,
                            "description": "PRs accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-11T08:11:27Z",
                    "updated_at": "2020-10-11T08:11:59Z",
                    "closed_at": "2020-10-11T08:11:59Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/pulls/10",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/10",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20/pull/10.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20/pull/10.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/9",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/9/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/9/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/9/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/9",
                    "id": 718619597,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NTAwOTc2MzMy",
                    "number": 9,
                    "title": "Updated folder structure and updated README.",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2415150801,
                            "node_id": "MDU6TGFiZWwyNDE1MTUwODAx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "ad380d",
                            "default": false,
                            "description": "PRs accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-10T13:24:23Z",
                    "updated_at": "2020-10-10T13:25:35Z",
                    "closed_at": "2020-10-10T13:25:35Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/pulls/9",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/9",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20/pull/9.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20/pull/9.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/7",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/7/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/7/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/7/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/7",
                    "id": 714294727,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk3NDE4NjEy",
                    "number": 7,
                    "title": "Sync commit for changes.",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2415150801,
                            "node_id": "MDU6TGFiZWwyNDE1MTUwODAx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "ad380d",
                            "default": false,
                            "description": "PRs accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-04T11:37:32Z",
                    "updated_at": "2020-10-10T12:26:21Z",
                    "closed_at": "2020-10-04T11:37:45Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/pulls/7",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/7",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20/pull/7.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20/pull/7.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/1",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/1/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/1/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20/issues/1/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/1",
                    "id": 714293164,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk3NDE3NDUy",
                    "number": 1,
                    "title": "Added website for checking progress for Hacktober Fest 20",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2319526359,
                            "node_id": "MDU6TGFiZWwyMzE5NTI2MzU5",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/labels/enhancement",
                            "name": "enhancement",
                            "color": "a2eeef",
                            "default": true,
                            "description": "New feature or request"
                        },
                        {
                            "id": 2415150801,
                            "node_id": "MDU6TGFiZWwyNDE1MTUwODAx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "ad380d",
                            "default": false,
                            "description": "PRs accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-04T11:28:28Z",
                    "updated_at": "2020-10-10T12:26:47Z",
                    "closed_at": "2020-10-04T11:29:40Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20/pulls/1",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20/pull/1",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20/pull/1.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20/pull/1.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/Algorithms/issues/92",
                    "repository_url": "https://api.github.com/repos/TechOUs/Algorithms",
                    "labels_url": "https://api.github.com/repos/TechOUs/Algorithms/issues/92/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/Algorithms/issues/92/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/Algorithms/issues/92/events",
                    "html_url": "https://github.com/TechOUs/Algorithms/pull/92",
                    "id": 712460199,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1OTM1ODQ3",
                    "number": 92,
                    "title": "Updated binarySearch.py",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2083085595,
                            "node_id": "MDU6TGFiZWwyMDgzMDg1NTk1",
                            "url": "https://api.github.com/repos/TechOUs/Algorithms/labels/HacktoberFest20",
                            "name": "HacktoberFest20",
                            "color": "2ab7a2",
                            "default": false,
                            "description": "Issues to be fixed just for hacktoberfest20"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T04:10:56Z",
                    "updated_at": "2020-10-01T04:12:25Z",
                    "closed_at": "2020-10-01T04:12:25Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/Algorithms/pulls/92",
                        "html_url": "https://github.com/TechOUs/Algorithms/pull/92",
                        "diff_url": "https://github.com/TechOUs/Algorithms/pull/92.diff",
                        "patch_url": "https://github.com/TechOUs/Algorithms/pull/92.patch"
                    },
                    "body": " fixed #81",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/GauravWalia19/algOrithms/issues/3",
                    "repository_url": "https://api.github.com/repos/GauravWalia19/algOrithms",
                    "labels_url": "https://api.github.com/repos/GauravWalia19/algOrithms/issues/3/labels{/name}",
                    "comments_url": "https://api.github.com/repos/GauravWalia19/algOrithms/issues/3/comments",
                    "events_url": "https://api.github.com/repos/GauravWalia19/algOrithms/issues/3/events",
                    "html_url": "https://github.com/GauravWalia19/algOrithms/pull/3",
                    "id": 712454845,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1OTMxNTY2",
                    "number": 3,
                    "title": "Sync pr for changes",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 1591070231,
                            "node_id": "MDU6TGFiZWwxNTkxMDcwMjMx",
                            "url": "https://api.github.com/repos/GauravWalia19/algOrithms/labels/enhancement",
                            "name": "enhancement",
                            "color": "a2eeef",
                            "default": true,
                            "description": "New feature or request"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T03:58:28Z",
                    "updated_at": "2020-10-10T12:28:21Z",
                    "closed_at": "2020-10-01T03:58:56Z",
                    "author_association": "OWNER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/GauravWalia19/algOrithms/pulls/3",
                        "html_url": "https://github.com/GauravWalia19/algOrithms/pull/3",
                        "diff_url": "https://github.com/GauravWalia19/algOrithms/pull/3.diff",
                        "patch_url": "https://github.com/GauravWalia19/algOrithms/pull/3.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/9",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/9/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/9/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/9/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/9",
                    "id": 712396497,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODg1ODI4",
                    "number": 9,
                    "title": "Merge pull request #8 from TechOUs/master",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2389835371,
                            "node_id": "MDU6TGFiZWwyMzg5ODM1Mzcx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/HacktoberFest20",
                            "name": "HacktoberFest20",
                            "color": "3cd14b",
                            "default": false,
                            "description": ""
                        },
                        {
                            "id": 2380044629,
                            "node_id": "MDU6TGFiZWwyMzgwMDQ0NjI5",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/enhancement",
                            "name": "enhancement",
                            "color": "a2eeef",
                            "default": true,
                            "description": "New feature or request"
                        },
                        {
                            "id": 2414438112,
                            "node_id": "MDU6TGFiZWwyNDE0NDM4MTEy",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "00FFFF",
                            "default": false,
                            "description": "PR accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T01:15:13Z",
                    "updated_at": "2020-10-10T12:28:39Z",
                    "closed_at": "2020-10-01T01:15:58Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/pulls/9",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/9",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/9.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/9.patch"
                    },
                    "body": "Added LICENSE and ISSUE TEMPLATEs",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/8",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/8/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/8/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/8/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/8",
                    "id": 712395469,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODg0OTc3",
                    "number": 8,
                    "title": "Added LICENSE and ISSUE TEMPLATEs",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2389835371,
                            "node_id": "MDU6TGFiZWwyMzg5ODM1Mzcx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/HacktoberFest20",
                            "name": "HacktoberFest20",
                            "color": "3cd14b",
                            "default": false,
                            "description": ""
                        },
                        {
                            "id": 2414438112,
                            "node_id": "MDU6TGFiZWwyNDE0NDM4MTEy",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "00FFFF",
                            "default": false,
                            "description": "PR accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "assignees": [
                        {
                            "login": "GauravWalia19",
                            "id": 29369199,
                            "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                            "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/GauravWalia19",
                            "html_url": "https://github.com/GauravWalia19",
                            "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                            "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                            "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                            "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                            "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                            "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                            "type": "User",
                            "site_admin": false
                        }
                    ],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T01:12:27Z",
                    "updated_at": "2020-10-10T12:28:53Z",
                    "closed_at": "2020-10-01T01:13:28Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/pulls/8",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/8",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/8.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/8.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/7",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/7/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/7/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/7/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/7",
                    "id": 712393375,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODgzMzU0",
                    "number": 7,
                    "title": "Created MIT LICENSE",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2389835371,
                            "node_id": "MDU6TGFiZWwyMzg5ODM1Mzcx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/HacktoberFest20",
                            "name": "HacktoberFest20",
                            "color": "3cd14b",
                            "default": false,
                            "description": ""
                        },
                        {
                            "id": 2414438112,
                            "node_id": "MDU6TGFiZWwyNDE0NDM4MTEy",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "00FFFF",
                            "default": false,
                            "description": "PR accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T01:06:30Z",
                    "updated_at": "2020-10-10T12:29:08Z",
                    "closed_at": "2020-10-01T01:06:49Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/pulls/7",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/7",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/7.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/7.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/6",
                    "repository_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community",
                    "labels_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/6/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/6/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/issues/6/events",
                    "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/6",
                    "id": 712391929,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODgyMjQ3",
                    "number": 6,
                    "title": "Added readme, contributing file and other codes",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [
                        {
                            "id": 2389835371,
                            "node_id": "MDU6TGFiZWwyMzg5ODM1Mzcx",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/HacktoberFest20",
                            "name": "HacktoberFest20",
                            "color": "3cd14b",
                            "default": false,
                            "description": ""
                        },
                        {
                            "id": 2414438112,
                            "node_id": "MDU6TGFiZWwyNDE0NDM4MTEy",
                            "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/labels/hacktoberfest-accepted",
                            "name": "hacktoberfest-accepted",
                            "color": "00FFFF",
                            "default": false,
                            "description": "PR accepted for hacktober fest"
                        }
                    ],
                    "state": "closed",
                    "locked": false,
                    "assignee": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "assignees": [
                        {
                            "login": "GauravWalia19",
                            "id": 29369199,
                            "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                            "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                            "gravatar_id": "",
                            "url": "https://api.github.com/users/GauravWalia19",
                            "html_url": "https://github.com/GauravWalia19",
                            "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                            "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                            "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                            "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                            "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                            "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                            "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                            "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                            "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                            "type": "User",
                            "site_admin": false
                        }
                    ],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T01:02:30Z",
                    "updated_at": "2020-10-10T12:29:25Z",
                    "closed_at": "2020-10-01T01:04:01Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/HacktoberFest20Community/pulls/6",
                        "html_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/6",
                        "diff_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/6.diff",
                        "patch_url": "https://github.com/TechOUs/HacktoberFest20Community/pull/6.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/29",
                    "repository_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io",
                    "labels_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/29/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/29/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/29/events",
                    "html_url": "https://github.com/TechOUs/treasurejs.github.io/pull/29",
                    "id": 712376403,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODcwMjYx",
                    "number": 29,
                    "title": "Merge pull request #28 from TechOUs/dev",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T00:18:45Z",
                    "updated_at": "2020-10-01T00:19:33Z",
                    "closed_at": "2020-10-01T00:19:33Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/pulls/29",
                        "html_url": "https://github.com/TechOUs/treasurejs.github.io/pull/29",
                        "diff_url": "https://github.com/TechOUs/treasurejs.github.io/pull/29.diff",
                        "patch_url": "https://github.com/TechOUs/treasurejs.github.io/pull/29.patch"
                    },
                    "body": "Adding the bugs fixes from dev branch",
                    "performed_via_github_app": null,
                    "score": 1.0
                },
                {
                    "url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/28",
                    "repository_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io",
                    "labels_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/28/labels{/name}",
                    "comments_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/28/comments",
                    "events_url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/issues/28/events",
                    "html_url": "https://github.com/TechOUs/treasurejs.github.io/pull/28",
                    "id": 712375760,
                    "node_id": "MDExOlB1bGxSZXF1ZXN0NDk1ODY5NzIw",
                    "number": 28,
                    "title": "Adding the bugs fixes from dev branch",
                    "user": {
                        "login": "GauravWalia19",
                        "id": 29369199,
                        "node_id": "MDQ6VXNlcjI5MzY5MTk5",
                        "avatar_url": "https://avatars1.githubusercontent.com/u/29369199?v=4",
                        "gravatar_id": "",
                        "url": "https://api.github.com/users/GauravWalia19",
                        "html_url": "https://github.com/GauravWalia19",
                        "followers_url": "https://api.github.com/users/GauravWalia19/followers",
                        "following_url": "https://api.github.com/users/GauravWalia19/following{/other_user}",
                        "gists_url": "https://api.github.com/users/GauravWalia19/gists{/gist_id}",
                        "starred_url": "https://api.github.com/users/GauravWalia19/starred{/owner}{/repo}",
                        "subscriptions_url": "https://api.github.com/users/GauravWalia19/subscriptions",
                        "organizations_url": "https://api.github.com/users/GauravWalia19/orgs",
                        "repos_url": "https://api.github.com/users/GauravWalia19/repos",
                        "events_url": "https://api.github.com/users/GauravWalia19/events{/privacy}",
                        "received_events_url": "https://api.github.com/users/GauravWalia19/received_events",
                        "type": "User",
                        "site_admin": false
                    },
                    "labels": [],
                    "state": "closed",
                    "locked": false,
                    "assignee": null,
                    "assignees": [],
                    "milestone": null,
                    "comments": 0,
                    "created_at": "2020-10-01T00:17:02Z",
                    "updated_at": "2020-10-01T00:17:34Z",
                    "closed_at": "2020-10-01T00:17:34Z",
                    "author_association": "MEMBER",
                    "active_lock_reason": null,
                    "draft": false,
                    "pull_request": {
                        "url": "https://api.github.com/repos/TechOUs/treasurejs.github.io/pulls/28",
                        "html_url": "https://github.com/TechOUs/treasurejs.github.io/pull/28",
                        "diff_url": "https://github.com/TechOUs/treasurejs.github.io/pull/28.diff",
                        "patch_url": "https://github.com/TechOUs/treasurejs.github.io/pull/28.patch"
                    },
                    "body": "",
                    "performed_via_github_app": null,
                    "score": 1.0
                }
            ]
        });
    }
})

module.exports = router;
