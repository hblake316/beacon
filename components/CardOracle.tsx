import React, { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import {
  Typography,
  Box,
  Button,
  Paper
} from '@mui/material'

// Import images directly
import cardBack from '../img/hp-card-back.png'
import cardMentalism from '../img/hp-card-mentalism.png'
import cardCorrespondence from '../img/hp-card-correspondence.png'
import cardVibration from '../img/hp-card-vibration.png'
import cardPolarity from '../img/hp-card-polarity.png'
import cardRhythm from '../img/hp-card-rhythm.png'
import cardCauseEffect from '../img/hp-card-cause-effect.png'
import cardGender from '../img/hp-card-gender.png'

interface Card {
  id: string
  name: string
  image: string
  description: string
}

const CardOracle: React.FC = () => {
  const theme = useTheme()

  // Define all cards with imported images
  const cards: Card[] = [
    {
      id: 'mentalism',
      name: 'Principle of Mentalism',
      image: cardMentalism.src,
      description:
        'The All is Mind; The Universe is Mental.'
    },
    {
      id: 'correspondence',
      name: 'Principle of Correspondence',
      image: cardCorrespondence.src,
      description:
        'As above, so below; as below, so above.'
    },
    {
      id: 'vibration',
      name: 'Principle of Vibration',
      image: cardVibration.src,
      description:
        'Nothing rests; everything moves; everything vibrates.'
    },
    {
      id: 'polarity',
      name: 'Principle of Polarity',
      image: cardPolarity.src,
      description:
        'Everything is dual; everything has poles; everything has its pair of opposites.'
    },
    {
      id: 'rhythm',
      name: 'Principle of Rhythm',
      image: cardRhythm.src,
      description:
        'Everything flows, out and in; everything has its tides; all things rise and fall.'
    },
    {
      id: 'cause-effect',
      name: 'Principle of Cause and Effect',
      image: cardCauseEffect.src,
      description:
        'Every Cause has its Effect; every Effect has its Cause.'
    },
    {
      id: 'gender',
      name: 'Principle of Gender',
      image: cardGender.src,
      description:
        'Gender is in everything; everything has its Masculine and Feminine principles.'
    }
  ]

  const [flipped, setFlipped] =
    useState(false)
  const [
    selectedCard,
    setSelectedCard
  ] = useState<Card | null>(null)

  const drawCard = () => {
    const randomIndex = Math.floor(
      Math.random() * cards.length
    )
    setSelectedCard(cards[randomIndex])
    setFlipped(true)
  }

  const resetCard = () => {
    setFlipped(false)
    // Optional: Add a slight delay before selecting a new card
    setTimeout(
      () => setSelectedCard(null),
      300
    )
  }

  // Calculate appropriate height based on screen size while preserving aspect ratio
  const cardWidth = 300 // Fixed width
  const cardHeight =
    (cardWidth * 1050) / 600 // Maintain 600:1050 aspect ratio

  return (
    <Box
      sx={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: 4,
        textAlign: 'center'
      }}
    >
      <Typography
        variant='h1'
        gutterBottom
      >
        Hermetic Principles Oracle
      </Typography>

      {/* Button at the top */}
      <Box sx={{ marginBottom: 3 }}>
        {flipped ? (
          <Button
            variant='contained'
            color='primary'
            onClick={resetCard}
          >
            Draw Another Card
          </Button>
        ) : (
          <Typography variant='body1'>
            Click the card to draw
          </Typography>
        )}
      </Box>

      <Box
        sx={{
          margin: '1rem 0',
          perspective: '1000px'
        }}
      >
        <Box
          sx={{
            width: cardWidth,
            height: cardHeight,
            margin: '0 auto',
            transition:
              'transform 0.6s',
            transformStyle:
              'preserve-3d',
            cursor: 'pointer',
            transform: flipped
              ? 'rotateY(180deg)'
              : 'none'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              textAlign: 'center',
              transition:
                'transform 0.6s',
              transformStyle:
                'preserve-3d'
            }}
          >
            <Paper
              elevation={3}
              onClick={drawCard}
              sx={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backfaceVisibility:
                  'hidden',
                backgroundColor:
                  theme.palette
                    .background.default,
                display: 'flex',
                alignItems: 'center',
                justifyContent:
                  'center',
                borderRadius: '10px'
              }}
            >
              <Box
                component='img'
                src={cardBack.src}
                alt='Card Back'
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '10px'
                }}
              />
            </Paper>

            {selectedCard && (
              <Paper
                elevation={3}
                sx={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backfaceVisibility:
                    'hidden',
                  transform:
                    'rotateY(180deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:
                    'center',
                  borderRadius: '10px'
                }}
              >
                <Box
                  component='img'
                  src={
                    selectedCard.image
                  }
                  alt={
                    selectedCard.name
                  }
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '10px'
                  }}
                />
              </Paper>
            )}
          </Box>
        </Box>
      </Box>

      {flipped && selectedCard && (
        <Box sx={{ marginTop: 4 }}>
          <Typography
            variant='h2'
            gutterBottom
          >
            {selectedCard.name}
          </Typography>
          <Typography variant='body1'>
            {selectedCard.description}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default CardOracle
