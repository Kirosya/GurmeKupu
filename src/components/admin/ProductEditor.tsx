'use client';

import React, { useState, useEffect } from 'react';
import { Product } from '@/lib/types';
import { Save, Plus, Check, X, Scale, Trash2, Upload, Loader2, Image as ImageIcon } from 'lucide-react';

const IMGBB_API_KEY = '35f4c84a5df5cae81a4a0b9011e091c9';

export const ProductEditor: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [uploadingImageId, setUploadingImageId] = useState<string | null>(null);

  // Yeni Ürün Formu State
  const [newProduct, setNewProduct] = useState<Partial<Product>>({
    name: '',
    category: 'Zeytinyağlılar & Meze',
    pricePerKg: 300,
    description: '',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
    isAvailable: true,
  });
  const [showAddForm, setShowAddForm] = useState<boolean>(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/products');
      const data = await res.json();
      if (data.success && data.products) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Fetch products error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSaveAll = async (updatedProductsList: Product[]) => {
    setIsSaving(true);
    setSaveSuccess(false);
    try {
      const res = await fetch('/api/products', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ products: updatedProductsList }),
      });
      const data = await res.json();
      if (data.success) {
        setProducts(updatedProductsList);
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 2000);
      }
    } catch (err) {
      console.error('Save products error:', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleFieldChange = (id: string, field: keyof Product, value: any) => {
    const updated = products.map(p => (p.id === id ? { ...p, [field]: value } : p));
    setProducts(updated);
  };

  const handleDeleteProduct = (id: string) => {
    if (confirm('Bu ürünü silmek istediğinize emin misiniz?')) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      // Not: Sunucuya kaydetmek için kullanıcının "Değişiklikleri Kaydet" butonuna basması gerekir.
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, productId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImageId(productId);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();

      if (data.success) {
        if (productId === 'new') {
          setNewProduct({ ...newProduct, image: data.data.url });
        } else {
          handleFieldChange(productId, 'image', data.data.url);
        }
      } else {
        alert('Fotoğraf yüklenemedi: ' + data.error?.message);
      }
    } catch (err) {
      console.error('Image upload error:', err);
      alert('Fotoğraf yüklenirken bir hata oluştu.');
    } finally {
      setUploadingImageId(null);
    }
  };

  const handleAddNewProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.pricePerKg) return;

    const created: Product = {
      id: `prod-${Date.now()}`,
      name: newProduct.name,
      category: newProduct.category || 'Diğer',
      pricePerKg: Number(newProduct.pricePerKg),
      description: newProduct.description || '',
      image: newProduct.image || 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      isAvailable: newProduct.isAvailable ?? true,
    };

    const nextList = [...products, created];
    handleSaveAll(nextList);
    setShowAddForm(false);
    setNewProduct({
      name: '',
      category: 'Zeytinyağlılar & Meze',
      pricePerKg: 300,
      description: '',
      image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80',
      isAvailable: true,
    });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="flex items-center justify-between bg-stone-900/80 p-4 rounded-2xl border border-stone-800 backdrop-blur-md">
        <div>
          <h2 className="text-xl font-extrabold text-stone-100 flex items-center gap-2">
            <Scale className="w-5 h-5 text-amber-500" /> Ürün & Fiyat Yönetim Ekranı
          </h2>
          <p className="text-xs text-stone-400 mt-0.5">
            Menüdeki lezzetleri ekleyin, düzenleyin, fotoğraflarını değiştirin.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 w-full sm:w-auto rounded-xl gold-gradient-bg text-stone-950 text-xs font-bold shadow-md hover:brightness-110 transition-all"
          >
            <Plus className="w-4 h-4" /> Yeni Ürün Ekle
          </button>
          
          <button
            onClick={() => handleSaveAll(products)}
            disabled={isSaving}
            className={`flex items-center justify-center gap-1.5 px-4 py-2 w-full sm:w-auto rounded-xl font-extrabold text-xs transition-all ${
              saveSuccess
                ? 'bg-emerald-600 text-white'
                : 'bg-amber-500 text-stone-950 hover:bg-amber-400'
            }`}
          >
            {saveSuccess ? (
              <>
                <Check className="w-4 h-4" /> Kaydedildi
              </>
            ) : (
              <>
                <Save className="w-4 h-4" /> Değişiklikleri Kaydet
              </>
            )}
          </button>
        </div>
      </div>

      {/* Yeni Ürün Ekleme Formu */}
      {showAddForm && (
        <form onSubmit={handleAddNewProduct} className="bg-stone-900 border border-amber-500/40 p-5 rounded-2xl space-y-4 animate-fade-in">
          <div className="flex justify-between items-center border-b border-stone-800 pb-3">
            <h3 className="text-sm font-bold text-amber-400">Yeni Menü Ürünü Ekle</h3>
            <button type="button" onClick={() => setShowAddForm(false)} className="text-stone-400 hover:text-stone-200">
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-medium text-stone-300">Ürün Adı *</label>
              <input
                type="text"
                required
                value={newProduct.name}
                onChange={e => setNewProduct({ ...newProduct, name: e.target.value })}
                className="w-full mt-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="Örn: Zeytinyağlı Enginar"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-300">Kategori</label>
              <input
                type="text"
                value={newProduct.category}
                onChange={e => setNewProduct({ ...newProduct, category: e.target.value })}
                className="w-full mt-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
                placeholder="Örn: Zeytinyağlılar & Meze"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-stone-300">Kilogram Fiyatı (TL/kg) *</label>
              <input
                type="number"
                required
                value={newProduct.pricePerKg}
                onChange={e => setNewProduct({ ...newProduct, pricePerKg: Number(e.target.value) })}
                className="w-full mt-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-stone-300">Ürün Açıklaması</label>
            <textarea
              rows={2}
              value={newProduct.description}
              onChange={e => setNewProduct({ ...newProduct, description: e.target.value })}
              className="w-full mt-1 bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-stone-100 text-xs focus:outline-none focus:border-amber-500 resize-none"
              placeholder="Özel baharatlı iç harç..."
            />
          </div>
          
          <div>
            <label className="text-xs font-medium text-stone-300 block mb-2">Ürün Fotoğrafı</label>
            <div className="flex items-center gap-4">
              <img src={newProduct.image} alt="Önizleme" className="w-16 h-16 rounded-xl object-cover border border-stone-800" />
              <label className="flex items-center gap-2 px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-300 hover:text-white hover:border-amber-500 cursor-pointer transition-colors">
                {uploadingImageId === 'new' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Upload className="w-4 h-4" />}
                <span>Fotoğraf Yükle</span>
                <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, 'new')} disabled={uploadingImageId === 'new'} />
              </label>
            </div>
          </div>

          <div className="flex justify-end pt-2 border-t border-stone-800">
            <button
              type="submit"
              className="py-2 px-5 bg-amber-500 text-stone-950 rounded-xl font-bold text-xs hover:bg-amber-400 transition-colors"
            >
              Kaydet ve Menüye Ekle
            </button>
          </div>
        </form>
      )}

      {/* Ürün Listesi Tablosu / Kartları */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {products.map(p => (
          <div key={p.id} className="bg-stone-900 border border-stone-800 rounded-2xl p-4 space-y-4 hover:border-amber-500/40 transition-colors flex flex-col">
            
            {/* Üst Kısım: Fotoğraf ve Temel Bilgiler */}
            <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
              {/* Fotoğraf Değiştirme */}
              <div className="relative group shrink-0 mx-auto sm:mx-0">
                <img src={p.image} alt={p.name} className="w-20 h-20 rounded-xl object-cover border border-stone-800 transition-opacity group-hover:opacity-50" />
                <label className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer bg-black/40 rounded-xl transition-opacity">
                  {uploadingImageId === p.id ? (
                    <Loader2 className="w-6 h-6 text-amber-500 animate-spin" />
                  ) : (
                    <>
                      <ImageIcon className="w-6 h-6 text-amber-500 drop-shadow-md" />
                      <span className="text-[9px] font-bold text-white mt-1">Değiştir</span>
                    </>
                  )}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleImageUpload(e, p.id)} disabled={uploadingImageId === p.id} />
                </label>
              </div>
              
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start gap-2">
                  <input
                    type="text"
                    value={p.name}
                    onChange={e => handleFieldChange(p.id, 'name', e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-2.5 py-1 text-sm font-bold text-stone-100 focus:border-amber-500"
                    placeholder="Ürün Adı"
                  />
                  <button 
                    onClick={() => handleDeleteProduct(p.id)}
                    title="Ürünü Sil"
                    className="p-1.5 text-stone-500 hover:text-red-400 hover:bg-stone-800 rounded-lg transition-colors shrink-0"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[10px] text-stone-400">Kategori:</span>
                  <input
                    type="text"
                    value={p.category}
                    onChange={e => handleFieldChange(p.id, 'category', e.target.value)}
                    className="bg-stone-950 border border-stone-800 rounded px-2 py-0.5 text-[11px] text-amber-400 focus:border-amber-500"
                  />
                </div>
              </div>
            </div>

            {/* Orta Kısım: Açıklama */}
            <div>
              <label className="text-[10px] text-stone-400 block mb-0.5">Ürün Açıklaması:</label>
              <textarea
                rows={2}
                value={p.description || ''}
                onChange={e => handleFieldChange(p.id, 'description', e.target.value)}
                className="w-full bg-stone-950 border border-stone-800 rounded-lg px-2.5 py-1.5 text-[11px] text-stone-300 focus:border-amber-500 resize-none"
                placeholder="Açıklama yok..."
              />
            </div>

            {/* Alt Kısım: Fiyat ve Stok */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-stone-800/60 mt-auto">
              <div>
                <label className="text-[10px] text-stone-400 block mb-0.5">Kg Fiyatı (TL/kg):</label>
                <div className="relative">
                  <input
                    type="number"
                    value={p.pricePerKg}
                    onChange={e => handleFieldChange(p.id, 'pricePerKg', Number(e.target.value))}
                    className="w-full bg-stone-950 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs font-extrabold text-amber-400 focus:border-amber-500"
                  />
                  <span className="absolute right-2 top-1.5 text-[10px] text-stone-500">₺/kg</span>
                </div>
              </div>

              <div>
                <label className="text-[10px] text-stone-400 block mb-0.5">Stok / Satış Durumu:</label>
                <button
                  type="button"
                  onClick={() => handleFieldChange(p.id, 'isAvailable', !p.isAvailable)}
                  className={`w-full py-1.5 px-2 rounded-lg text-xs font-bold border transition-colors ${
                    p.isAvailable
                      ? 'bg-emerald-950/60 border-emerald-800 text-emerald-400 hover:bg-emerald-900/80'
                      : 'bg-red-950/60 border-red-800 text-red-400 hover:bg-red-900/80'
                  }`}
                >
                  {p.isAvailable ? '✓ Satışta' : '✗ Tükendi'}
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
