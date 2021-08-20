import React, { useState } from 'react'
import './App.css'

const emojiDictionary = {
  '😊': 'Smiling',
  '😳': 'disbelief',
  '😔': 'sad',
  '🥡': 'takeout box',
  '❤️': 'love',
  '😑': 'annoyance',
  '😀': 'Grinning Face',
  '😃': 'Grinning Face with Big Eyes',
  '😄': 'Grinning Face with Smiling Eyes',
  '😁': 'Beaming Face with Smiling Eyes',
  '😆': 'Grinning Squinting Face',
  '😅': 'Grinning Face with Sweat',
  '🤣': 'Rolling on the Floor Laughing',
  '😂': 'Face with Tears of Joy',
  '🙂': 'Slightly Smiling Face',
  '🙃': 'Upside-Down Face',
  '😉': 'Winking Face',
  '😇': 'Smiling Face with Halo',
  '🥰': 'Smiling Face with Hearts',
  '😍': 'Smiling Face with Heart-Eyes',
  '🤩': 'Star-Struck',
}

const emojis = Object.keys(emojiDictionary)

export default function App() {
  const [emoji, setEmoji] = useState('')
  const [meaning, setMeaning] = useState('translation will appear here..')

  function changeHandler(event) {
    const inputEmoji = event.target.value
    setEmoji(inputEmoji)
    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji])
    } else {
      setMeaning('failure to recognise this emoji')
    }
  }

  function emojiClickHandler(inputEmoji) {
    setMeaning(emojiDictionary[inputEmoji])
  }

  return (
    <div className='App'>
      <h1>Emoji Dictionary</h1>
      <input
        onChange={changeHandler}
        value={emoji}
        placeholder={'Search your emoji'}
        style={{
          padding: '1em',
          minWidth: '80%',
        }}
      />
      <h2> {emoji} </h2>
      <h3> {meaning} </h3>
      {emojis.map((emoji) => (
        <span
          onClick={() => emojiClickHandler(emoji)}
          style={{ fontSize: '2rem', padding: '0.5rem', cursor: 'pointer' }}>
          {' '}
          {emoji}{' '}
        </span>
      ))}
    </div>
  )
}
