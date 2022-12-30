import styled from "@emotion/styled";

const StyledVideoCard = styled.div`
  max-width: 300px;
  width: 300px;
  border: 1px solid #ededed;
  background-color: #fff;
  height: 300px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

  .player {
    width: 100%;
    height: 100%;

    video {
      height: 100% !important;
      object-fit: cover;
    }
  }

  .text {
    padding: 10px;
  }
`;

const VideoCard = ({ url, data }: { url: string; data?: string }) => {
  return (
    <>
      <StyledVideoCard>
        <div className="player" data-aos={data}>
          <video controls src={url} width={"100%"} height={"100%"} />
        </div>
        {/* <div className='text'>
            piano tutorial
        </div> */}
      </StyledVideoCard>
    </>
  );
};

export default VideoCard;
