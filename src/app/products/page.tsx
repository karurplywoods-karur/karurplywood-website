import { Metadata } from 'next';
import Link from 'next/link';
import Gallery from '@/components/Gallery';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Products | Plywood, Doors, Laminates & Hardware in Karur',
  description: 'Buy top-quality plywood, doors, laminates and hardware at best prices in Karur.',
};

const WA = process.env.NEXT_PUBLIC_WA_NUMBER || '919999999999';

// ✅ STATIC gallery (no DB)
const gallery = [
  { id: 1, image: '/images/sample1.jpg' },
  { id: 2, image: '/images/sample2.jpg' }
];

// ✅ KEEP your existing PRODUCTS + FAQS (no change)
const PRODUCTS = [/* KEEP YOUR EXISTING PRODUCTS ARRAY */];
const FAQS = [/* KEEP YOUR EXISTING FAQS ARRAY */];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: '70px 0', textAlign: 'center' }}>
        <h1>Our Products</h1>
        <a href={`https://wa.me/${WA}?text=Hi, I need product details`}>
          WhatsApp
        </a>
      </section>

      {/* Products */}
      <div style={{ padding: '40px' }}>
        {PRODUCTS.map((cat) => (
          <div key={cat.id}>
            <h2>{cat.name}</h2>

            {cat.items.map((item) => (
              <div key={item.name}>
                <h3>{item.name}</h3>
                <p>{item.desc}</p>

                <a
                  href={`https://wa.me/${WA}?text=${item.wa}`}
                  target="_blank"
                >
                  Get Price
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Gallery */}
      {gallery.length > 0 && <Gallery items={gallery} />}

      {/* FAQ */}
      <div>
        {FAQS.map(([q, a], i) => (
          <div key={i}>
            <h4>{q}</h4>
            <p>{a}</p>
          </div>
        ))}
      </div>

      {/* Enquiry */}
      <EnquiryForm />
    </>
  );
}