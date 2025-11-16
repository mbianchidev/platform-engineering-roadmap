import { useState } from 'react'
import './App.css'
import { roadmapData } from './data/roadmapData'
import Header from './components/Header'
import RoadmapSection from './components/RoadmapSection'
import Modal from './components/Modal'

function App() {
  const [selectedTopic, setSelectedTopic] = useState(null)

  const openModal = (topic) => {
    setSelectedTopic(topic)
  }

  const closeModal = () => {
    setSelectedTopic(null)
  }

  return (
    <div className="app">
      <Header data={roadmapData} />
      
      <main className="main-content">
        {roadmapData.sections.map((section) => (
          <RoadmapSection
            key={section.id}
            section={section}
            onTopicClick={openModal}
          />
        ))}
      </main>

      {selectedTopic && (
        <Modal
          topic={selectedTopic}
          onClose={closeModal}
        />
      )}
    </div>
  )
}

export default App
