'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const categories = [
    { id: 'cake', name: 'Cake', image: '/cake-product.png', description: 'Kue ulang tahun, kue perayaan, dan kue custom dengan dekorasi cantik' },
    { id: 'bake', name: 'Bake', image: '/bake-product.png', description: 'Pastry fresh dari oven dan berbagai baked goods premium' },
    { id: 'kue-kering', name: 'Kue Kering', image: '/kue-kering.png', description: 'Nastar, kastengel, putri salju, dan berbagai kue kering khas Indonesia' },
    { id: 'jajan', name: 'Jajan Indonesia', image: '/jajan-indonesia.png', description: 'Klepon, onde-onde, kue lapis, dan ancam jajan tradisional Nusantara' }
  ]

  const whatsappLink = 'https://wa.me/6285731137744?text=Halo%20DONITE,%20saya%20ingin%20memesan...'
  const instagramLink = 'https://instagram.com/aprillia_donite'

  return (
    <div style={{ fontFamily: 'system-ui, -apple-system, sans-serif', background: '#FDF8F3', minHeight: '100vh' }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        background: isScrolled ? 'rgba(253, 248, 243, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        boxShadow: isScrolled ? '0 2px 20px rgba(0,0,0,0.1)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#8B4513', letterSpacing: '2px' }}>
          DONITE
        </div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a href="#products" style={{ color: '#5D4037', textDecoration: 'none', fontWeight: 500 }}>Produk</a>
          <a href="#preorder" style={{ color: '#5D4037', textDecoration: 'none', fontWeight: 500 }}>Pre-Order</a>
          <a href="#contact" style={{ color: '#5D4037', textDecoration: 'none', fontWeight: 500 }}>Kontak</a>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(135deg, #8B4513, #A0522D)',
              color: 'white',
              padding: '0.6rem 1.5rem',
              borderRadius: '25px',
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              display: 'inline-block'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            Pesan Sekarang
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        height: '100vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/hero-bakery.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)'
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.7) 0%, rgba(93, 64, 55, 0.5) 100%)'
        }} />
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          width: '100%',
          padding: '0 2rem'
        }}>
          <h1 style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1rem',
            textShadow: '2px 4px 10px rgba(0,0,0,0.3)',
            letterSpacing: '8px'
          }}>
            DONITE
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255,255,255,0.95)',
            marginBottom: '0.5rem',
            fontWeight: 300,
            letterSpacing: '3px'
          }}>
            BAKERY & PASTRY
          </p>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255,255,255,0.9)',
            marginBottom: '2.5rem',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: 1.8
          }}>
            Cita rasa homemade dengan kualitas premium. <br />
            Cake, Kue Kering, dan Jajan Khas Indonesia untuk setiap momen spesial Anda.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="#products"
              style={{
                background: 'white',
                color: '#8B4513',
                padding: '1rem 2.5rem',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Lihat Menu
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: '1rem',
                border: '2px solid white',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'white'
                e.currentTarget.style.color = '#8B4513'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = 'white'
              }}
            >
              Pesan via WhatsApp
            </a>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 2s infinite'
        }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Pre-Order Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #8B4513, #A0522D)',
        padding: '1.5rem 2rem',
        textAlign: 'center'
      }}>
        <p style={{ color: 'white', fontSize: '1.1rem', margin: 0 }}>
          <span style={{ fontWeight: 'bold' }}>🎂 PRE-ORDER SYSTEM</span> — 
          Semua produk dibuat fresh setelah pemesanan. Pemesanan minimal H-2 hari sebelum pengambilan.
        </p>
      </section>

      {/* Product Categories */}
      <section id="products" style={{ padding: '5rem 2rem', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5D4037', marginBottom: '1rem', fontWeight: 'bold' }}>
            Kategori Produk
          </h2>
          <p style={{ color: '#8D6E63', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Temukan berbagai pilihan kue dan jajan lezat untuk memanjakan lidah Anda
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginTop: '2rem'
        }}>
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              style={{
                background: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(139, 69, 19, 0.15)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 30px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ 
                height: '220px', 
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)'
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.4rem', color: '#5D4037', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  {cat.name}
                </h3>
                <p style={{ color: '#8D6E63', lineHeight: 1.6, margin: 0 }}>
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pre-Order Info Section */}
      <section id="preorder" style={{ 
        padding: '5rem 2rem',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: '#5D4037', marginBottom: '1rem', fontWeight: 'bold' }}>
              Informasi Pre-Order
            </h2>
            <p style={{ color: '#8D6E63', fontSize: '1.1rem' }}>
              Semua produk DONITE dibuat fresh setelah pemesanan
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #FDF8F3, #F5E6D3)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                📅
              </div>
              <h3 style={{ color: '#5D4037', marginBottom: '0.5rem', fontWeight: '600' }}>Pemesanan H-2</h3>
              <p style={{ color: '#8D6E63', lineHeight: 1.6 }}>
                Pemesanan minimal 2 hari sebelum pengambilan untuk memastikan kualitas terbaik
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #FDF8F3, #F5E6D3)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                💳
              </div>
              <h3 style={{ color: '#5D4037', marginBottom: '0.5rem', fontWeight: '600' }}>DP 50%</h3>
              <p style={{ color: '#8D6E63', lineHeight: 1.6 }}>
                Pembayaran DP 50% di awal, pelunasan saat pengambilan pesanan
              </p>
            </div>

            <div style={{
              background: 'linear-gradient(135deg, #FDF8F3, #F5E6D3)',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, #8B4513, #A0522D)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                ✨
              </div>
              <h3 style={{ color: '#5D4037', marginBottom: '0.5rem', fontWeight: '600' }}>Fresh Made</h3>
              <p style={{ color: '#8D6E63', lineHeight: 1.6 }}>
                Setiap produk dibuat fresh tanpa pengawet, langsung dari oven ke tangan Anda
              </p>
            </div>
          </div>

          <div style={{
            marginTop: '3rem',
            background: 'linear-gradient(135deg, #8B4513, #A0522D)',
            borderRadius: '20px',
            padding: '2rem',
            textAlign: 'center',
            color: 'white'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Cara Memesan</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#8B4513',
                  fontWeight: 'bold'
                }}>1</div>
                <p>Hubungi via WhatsApp</p>
              </div>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#8B4513',
                  fontWeight: 'bold'
                }}>2</div>
                <p>Pilih produk & konfirmasi</p>
              </div>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#8B4513',
                  fontWeight: 'bold'
                }}>3</div>
                <p>Bayar DP 50%</p>
              </div>
              <div>
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: 'white',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 0.5rem',
                  color: '#8B4513',
                  fontWeight: 'bold'
                }}>4</div>
                <p>Ambil pesanan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ 
        padding: '5rem 2rem',
        background: 'linear-gradient(180deg, #FDF8F3 0%, #F5E6D3 100%)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#5D4037', marginBottom: '1rem', fontWeight: 'bold' }}>
            Hubungi Kami
          </h2>
          <p style={{ color: '#8D6E63', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
            Punya pertanyaan atau ingin memesan? Jangan ragu untuk menghubungi kami!
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                textDecoration: 'none',
                boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(37, 211, 102, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 30px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                💬
              </div>
              <h3 style={{ color: '#5D4037', marginBottom: '0.5rem', fontWeight: '600' }}>WhatsApp</h3>
              <p style={{ color: '#8D6E63' }}>0857-3113-7744</p>
              <p style={{ color: '#25D366', marginTop: '0.5rem', fontWeight: 500 }}>Klik untuk chat →</p>
            </a>

            <a 
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '2rem',
                textDecoration: 'none',
                boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                display: 'block'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(225, 48, 108, 0.2)'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 5px 30px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #833AB4, #E1306C, #F77737)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                📸
              </div>
              <h3 style={{ color: '#5D4037', marginBottom: '0.5rem', fontWeight: '600' }}>Instagram</h3>
              <p style={{ color: '#8D6E63' }}>@aprillia_donite</p>
              <p style={{ color: '#E1306C', marginTop: '0.5rem', fontWeight: 500 }}>Follow kami →</p>
            </a>
          </div>

          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: 'white',
              padding: '1.2rem 3rem',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '1.1rem',
              boxShadow: '0 5px 20px rgba(37, 211, 102, 0.3)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)'
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(37, 211, 102, 0.4)'
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 5px 20px rgba(37, 211, 102, 0.3)'
            }}
          >
            💬 Pesan via WhatsApp Sekarang
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#5D4037',
        padding: '3rem 2rem',
        color: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem'
          }}>
            <div>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', letterSpacing: '2px' }}>DONITE</h3>
              <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>
                Bakery & Pastry homemade dengan cita rasa premium. Melayani pemesanan untuk berbagai momen spesial Anda.
              </p>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontWeight: '600' }}>Menu</h4>
              <ul style={{ listStyle: 'none', padding: 0, color: 'rgba(255,255,255,0.8)' }}>
                <li style={{ marginBottom: '0.5rem' }}>🎂 Cake & Birthday</li>
                <li style={{ marginBottom: '0.5rem' }}>🥐 Pastry & Bake</li>
                <li style={{ marginBottom: '0.5rem' }}>🍪 Kue Kering</li>
                <li style={{ marginBottom: '0.5rem' }}>🥮 Jajan Indonesia</li>
              </ul>
            </div>
            <div>
              <h4 style={{ marginBottom: '1rem', fontWeight: '600' }}>Kontak</h4>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
                📱 WhatsApp: 0857-3113-7744
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '0.5rem' }}>
                📸 Instagram: @aprillia_donite
              </p>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                ⏰ Pre-Order: H-2 hari
              </p>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.2)',
            paddingTop: '2rem',
            textAlign: 'center',
            color: 'rgba(255,255,255,0.6)'
          }}>
            <p>© 2024 DONITE Bakery & Pastry. All rights reserved.</p>
            <p style={{ marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Made with ❤️ for Indonesian Bakery Lovers
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          40% {
            transform: translateX(-50%) translateY(-10px);
          }
          60% {
            transform: translateX(-50%) translateY(-5px);
          }
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
