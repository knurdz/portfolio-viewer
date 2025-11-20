export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ fontSize: '4rem', margin: 0, color: '#111827' }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: '#6b7280', marginTop: '1rem' }}>
        Portfolio not found
      </p>
      <p style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '0.5rem' }}>
        This portfolio doesn't exist or has been removed
      </p>
    </div>
  );
}
