import PropTypes from "prop-types";

const Videos = (props) => {
  const { video, description } = props.videoData;
  return (
    <>
      <h3>{description}</h3>
      <iframe
        width="853"
        height="480"
        src={video}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </>
  );
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired,
  };
};

export default Videos;
