import TimelineItem from './TimelineItem';

const Timeline = ({data}) =>
        data.length > 0 && (
        <div className="timeline-container bg-gray rounded rounded-3 border border-3">
            {data.map((data, idx) => (
                <TimelineItem data={data} key={idx} />
            ))}
        </div>
    );
export default Timeline