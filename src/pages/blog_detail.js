import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetail = () => {
    const location = useLocation();
    const title = location.state?.title || 'タイトルがありません';
    const body = location.state?.body || 'コンテンツがありません';
    const updatedAt = location.state?.updatedAt || '更新日時が表示されておりません';

    return (
        <>
            <div>Title: {title}</div>
            <div>Body: {body}</div>
            <div>UpdatedAt: {updatedAt}</div>
        </>
    );
};

export default BlogDetail;
