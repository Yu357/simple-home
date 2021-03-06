import styles from '../styles/messageSection.module.css'
import { useNavigate } from 'react-router-dom'

function MessageSection(props) {

  const navigate = useNavigate()

  return (
    <div className={styles.messageSection}>
      <h2>{props.title}</h2>
      <p>{props.detail}</p>

      <button onClick={() => {navigate('/')}}>Back to Top</button>

    </div>
  )
}

export default MessageSection