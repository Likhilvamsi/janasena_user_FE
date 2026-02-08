'use client'

import { useState } from 'react'
import { applyNominationClient } from '@/lib/nominations/applyNomination.client'

export default function ApplyPopup({ elections, onClose }) {
  const [selectedElectionId, setSelectedElectionId] = useState('')
  const [bio, setBio] = useState('')
  const [photo, setPhoto] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    if (!selectedElectionId || !photo) {
      setError('Please select election and upload photo')
      return
    }

    try {
      setLoading(true)
      setError('')

      const formData = new FormData()
      formData.append('election_id', selectedElectionId)
      formData.append('bio', bio)
      formData.append('profile_photo', photo)

      await applyNominationClient(formData)

      onClose()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl p-6 space-y-4">
        <h2 className="text-lg font-semibold">
          Apply for Nomination
        </h2>

        {/* SELECT */}
        <select
          value={selectedElectionId}
          onChange={e => setSelectedElectionId(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
        >
          <option value="">Select Election</option>

          {elections.map(e => (
            <option
              key={e.id}
              value={e.id}
              disabled={e.status !== 'nomination_open'}
            >
              {e.title}
              {e.status !== 'nomination_open'
                ? ' (Not open)'
                : ''}
            </option>
          ))}
        </select>

        {/* BIO */}
        <textarea
          placeholder="Your bio"
          value={bio}
          onChange={e => setBio(e.target.value)}
          className="w-full border rounded-lg p-2 text-sm"
        />

        {/* PHOTO */}
        <input
          type="file"
          accept="image/*"
          onChange={e => setPhoto(e.target.files[0])}
          className="text-sm"
        />

        {error && (
          <p className="text-sm text-red-600">{error}</p>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-4 py-2 text-sm bg-red-600 text-white rounded-lg"
          >
            {loading ? 'Submitting…' : 'Submit'}
          </button>
        </div>
      </div>
    </div>
  )
}
