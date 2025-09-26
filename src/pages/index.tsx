import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession()
  
  return (
    <div style={{ 
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      backgroundColor: '#0a0a0f',
      color: '#e0e6ff',
      fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
    }}>
      {/* Header */}
      <header style={{
        padding: '1rem 2rem',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        borderBottom: '2px solid #00d4ff',
        boxShadow: '0 4px 20px rgba(0, 212, 255, 0.1)'
      }}>
        <nav style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#00d4ff',
            textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
          }}>
            🎲 MyEpicLoot
          </div>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <a href="#miniatures" style={{ color: '#e0e6ff', textDecoration: 'none', transition: 'color 0.3s' }}>Miniatures</a>
            <a href="#digital" style={{ color: '#e0e6ff', textDecoration: 'none', transition: 'color 0.3s' }}>Digital</a>
            <a href="#lootbox" style={{ color: '#e0e6ff', textDecoration: 'none', transition: 'color 0.3s' }}>Lootboxes</a>
            {session ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img 
                  src={session.user?.image || ''} 
                  alt="Profile" 
                  style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                />
                <span style={{ color: '#e0e6ff' }}>
                  {session.user?.name}
                </span>
                <button 
                  onClick={() => signOut()}
                  style={{
                    background: 'linear-gradient(135deg, #ff6b9d 0%, #ff8a00 100%)',
                    color: '#fff',
                    padding: '0.6rem 1.5rem',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 15px rgba(255, 107, 157, 0.3)',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                >
                  🚪 Sign Out
                </button>
              </div>
            ) : (
              <button 
                onClick={() => signIn('google')}
                style={{
                  background: 'linear-gradient(135deg, #00d4ff 0%, #7b68ee 100%)',
                  color: '#fff',
                  padding: '0.6rem 1.5rem',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease'
                }}
              >
                🔐 Login with Google
              </button>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 20%, rgba(123, 104, 238, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <h1 style={{ 
            fontSize: '4rem', 
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #00d4ff 0%, #7b68ee 50%, #ff6b9d 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.2'
          }}>
            EPIC LOOT FOR EPIC ADVENTURES
          </h1>
          <p style={{ 
            fontSize: '1.4rem', 
            marginBottom: '2.5rem',
            maxWidth: '800px',
            margin: '0 auto 2.5rem',
            color: '#b8c5ff',
            lineHeight: '1.6'
          }}>
            3D miniatures • Digital assets • VTT content • Lootbox subscriptions<br/>
            Everything you need for legendary tabletop adventures!
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(135deg, #7b68ee 0%, #00d4ff 100%)',
              color: '#fff',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(123, 104, 238, 0.4)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              fontWeight: 'bold'
            }}>
              🎲 Explore Miniatures
            </button>
            <button style={{
              background: 'linear-gradient(135deg, #ff6b9d 0%, #7b68ee 100%)',
              color: '#fff',
              padding: '1rem 2.5rem',
              fontSize: '1.1rem',
              border: 'none',
              borderRadius: '12px',
              cursor: 'pointer',
              boxShadow: '0 8px 25px rgba(255, 107, 157, 0.4)',
              transition: 'transform 0.3s, box-shadow 0.3s',
              fontWeight: 'bold'
            }}>
              📦 Subscribe to Lootbox
            </button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '4rem 2rem' 
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          marginBottom: '3rem',
          background: 'linear-gradient(135deg, #00d4ff 0%, #7b68ee 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          🏆 Epic Collections
        </h2>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {/* Physical Products */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #00d4ff',
            boxShadow: '0 8px 25px rgba(0, 212, 255, 0.1)',
            position: 'relative'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎲</div>
            <h3 style={{ color: '#00d4ff', fontSize: '1.5rem', marginBottom: '1rem' }}>Physical Treasures</h3>
            <ul style={{ color: '#b8c5ff', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
              <li>🖨️ 3D Printed Miniatures (Raw, Primed, Painted)</li>
              <li>🎯 Premium Dice Sets</li>
              <li>📜 Props & Handouts</li>
              <li>🎴 Card Games</li>
              <li>🔧 Gaming Gizmos & Merch</li>
            </ul>
          </div>

          {/* Digital Products */}
          <div style={{
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
            padding: '2rem',
            borderRadius: '16px',
            border: '1px solid #7b68ee',
            boxShadow: '0 8px 25px rgba(123, 104, 238, 0.1)'
          }}>
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💾</div>
            <h3 style={{ color: '#7b68ee', fontSize: '1.5rem', marginBottom: '1rem' }}>Digital Arsenal</h3>
            <ul style={{ color: '#b8c5ff', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
              <li>🏰 VTT Assets & Maps</li>
              <li>📐 3D Models for Printing</li>
              <li>📚 Playable Modules</li>
              <li>🗺️ Adventures & Campaigns</li>
              <li>🎨 Digital Art & Tokens</li>
            </ul>
          </div>
        </div>

        {/* Lootbox Subscription */}
        <div style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #2a1810 100%)',
          padding: '3rem',
          borderRadius: '20px',
          border: '2px solid #ff6b9d',
          boxShadow: '0 12px 40px rgba(255, 107, 157, 0.2)',
          textAlign: 'center',
          position: 'relative'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>📦✨</div>
          <h3 style={{ 
            color: '#ff6b9d', 
            fontSize: '2rem', 
            marginBottom: '1rem',
            textShadow: '0 0 15px rgba(255, 107, 157, 0.5)'
          }}>
            Epic Lootbox Subscription
          </h3>
          <p style={{ color: '#b8c5ff', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2rem' }}>
            Get a monthly curated box combining <strong>physical miniatures</strong>, <strong>digital assets</strong>, 
            and <strong>exclusive content</strong>. Each box is themed around epic adventures!
          </p>
          <button style={{
            background: 'linear-gradient(135deg, #ff6b9d 0%, #00d4ff 100%)',
            color: '#fff',
            padding: '1rem 3rem',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            boxShadow: '0 8px 25px rgba(255, 107, 157, 0.4)',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}>
            🚀 Subscribe Now - R$ 99/month
          </button>
        </div>
      </section>

      {/* Coming from myepicloot.com.br */}
      <section style={{
        background: 'linear-gradient(135deg, #0d1421 0%, #1a1a2e 100%)',
        padding: '3rem 2rem',
        textAlign: 'center',
        borderTop: '2px solid #00d4ff'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h3 style={{ 
            color: '#00d4ff', 
            fontSize: '1.5rem', 
            marginBottom: '1rem' 
          }}>
            🌐 myepicloot.com.br
          </h3>
          <p style={{ color: '#b8c5ff', fontSize: '1.1rem' }}>
            Your Brazilian headquarters for epic tabletop adventures. 
            Physical shipping across Brazil • Digital downloads worldwide • Community-driven content
          </p>
        </div>
      </section>
    </div>
  );
}
