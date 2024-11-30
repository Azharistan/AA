/* eslint-disable react/prop-types */
import { Typography } from '@mui/material';
import Card from 'react-bootstrap/Card';

function ImgOverlay({ image, text, height, titlePartOne, titlePartTwo }) {
  return (
    <Card className="bg-dark text-white" style={{ marginTop: '100px' }}>
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: '300px',
        }}
      >
        <img
          src={image}
          alt="Card image"
          height={height}
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'fit', // Retain original aspect ratio without stretching
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(to bottom, rgba(2, 15, 35, 0.1), rgba(2, 15, 35, .9))`,
            // backgroundSize: 'contained',
            // backgroundPosition: 'center',
            // borderRadius: 0,
          }}
        >
          <Card.Title style={{ color: 'white' }}>
            <Typography
              fontFamily="gotham"
              variant="h3"
              style={{
                textAlign: 'center',
                display: 'block',
                fontSize: '35px',
                lineHeight: '46px',
                letterSpacing: '.01em',
                fontWeight: 800,
              }}
              sx={{ marginTop: '100px' }}
            >
              {titlePartOne}{' '}
              <span
                style={{
                  WebkitTextStroke: '1px', // Use camelCase for CSS property names in inline styles
                  WebkitTextFillColor: 'transparent', // Use camelCase for CSS property names in inline styles
                }}
              >
                {titlePartTwo}
              </span>
            </Typography>
          </Card.Title>
          <Card.Text></Card.Text>
          <Card.Text color="primary">{text}</Card.Text>
        </div>
      </div>
    </Card>
  );
}

export default ImgOverlay;
