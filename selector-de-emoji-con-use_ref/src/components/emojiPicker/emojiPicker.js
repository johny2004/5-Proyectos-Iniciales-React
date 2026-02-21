import { forwardRef, useRef, useState ,useEffect } from "react";
import { data as emojiList } from "./data";
import EmojiSearch from "./emojiSearch";
import EmojiButton from "./emojiButton";

import styles from "./emojiPicker.module.scss";
export function EmojiPicker(props, inputRef) {
  const [isOpen, setIsOpen] = useState(false);
  const [emojis, setEmojis] = useState(emojiList);

  const containerRef =useRef(null);

  useEffect(() => {
    window.addEventListener('click', e => {
        if (!containerRef.current.contains(e.target)) { //si le damos click a un elemento y este resulta ser padre de la capa del selector de emojis, entonces no se cierra el selector de emojis, pero si le damos click a un elemento que no es padre del selector de emojis, entonces se cierra el selector de emojis
            setIsOpen(false);
            setEmojis(emojiList);
        }}

    );
  }, [isOpen]);

  function handleClickOpen() {
    setIsOpen(!isOpen);
  }

  function handleSearch(e) {
    const q = e.target.value.toLowerCase();
    if (!!q) {
      const search = emojiList.filter(emoji => {
        return (
          emoji.name.toLowerCase().includes(q) ||
          emoji.keywords.toLowerCase().includes(q)
        );
      });
      setEmojis(search);
    } else {
      setEmojis(emojiList);
    }
  }

/*   function EmojiPickerContainer() {
    return (
       <div>
       <EmojiSearch onSearch={handleSearch} />
        <div>
           {emojiList.map((emoji) => (
             <div key={emoji.symbol}>{emoji.symbol}</div>
           ))}
        </div>
       </div>
     );
*/   

function handleOnClickEmoji(emoji){
     const cursorPos = inputRef.current.selectionStart; //indica la posición del cursor en el input
     const text = inputRef.current.value; //obtiene el texto actual del input
     const prev = text.slice (0, cursorPos); //obtiene el texto antes del cursor
     const next = text.slice (cursorPos); //obtiene el texto después del cursor

     inputRef.current.value = prev + emoji.symbol + next; //actualiza el valor del input con el nuevo texto
    inputRef.current.selectionStart = cursorPos + emoji.symbol.length; //actualiza la posición del cursor después de insertar el emoji
    inputRef.current.selectionEnd = cursorPos + emoji.symbol.length; //actualiza la posición del cursor después de insertar el emoji
     inputRef.current.focus(); //enfoca el input después de insertar el emoji
    }   

  return (
    <div ref={containerRef} className ={styles.inputContainer}>
      <button onClick={handleClickOpen} className={styles.emojiPickerButton}>🤔 </button>

      {isOpen ?  <div className={styles.emojiPickerContainer}>
        <EmojiSearch onSearch={handleSearch} />
        <div className={styles.emojisList}>
          {emojis.map((emoji) => (
            <EmojiButton key={emoji.symbol} emoji={emoji} onClick={handleOnClickEmoji}/>
            
          ))}
        </div>
      </div> : ""}
    </div>
  );
}

export default forwardRef(EmojiPicker);
