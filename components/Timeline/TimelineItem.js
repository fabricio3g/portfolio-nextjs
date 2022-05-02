const TimelineItem = ({ data }) => (
    <div className="timeline-item py-3">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: `${data.category.color}` }}>
                {data.category.tag}
            </span>
            <time className="text-muted">{data.date}</time>
            <p>{ data.text }</p>
            {data.link.url ? (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            ) : " "
        }
            <span className="circle" />
        </div>
    </div>
);

export default TimelineItem