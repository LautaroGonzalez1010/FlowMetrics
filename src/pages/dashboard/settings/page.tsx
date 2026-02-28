
import { useState, useRef, useCallback } from 'react';
import { useUser } from '../../../context/UserContext';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const { profile, updateProfile } = useUser();

  const [firstName, setFirstName] = useState(profile.firstName);
  const [lastName, setLastName] = useState(profile.lastName);
  const [email, setEmail] = useState(profile.email);
  const [bio, setBio] = useState(profile.bio);
  const [avatarPreview, setAvatarPreview] = useState(profile.avatarUrl);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      setAvatarPreview(result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleSave = useCallback(() => {
    try {
      updateProfile({
        firstName,
        lastName,
        email,
        bio,
        avatarUrl: avatarPreview,
      });
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Error updating profile:', error);
      // Optionally, you could display an error toast/notification here.
    }
  }, [firstName, lastName, email, bio, avatarPreview, updateProfile]);

  const getRoleBadgeClass = (role: string) => {
    const base = 'px-3 py-1 rounded-full text-sm font-semibold';
    switch (role) {
      case 'Administrador':
        return `${base} bg-[#C4704B]/15 text-[#C4704B]`;
      case 'Editor':
        return `${base} bg-[#7C9070]/15 text-[#7C9070]`;
      default:
        return `${base} bg-[#B8860B]/15 text-[#B8860B]`;
    }
  };

  const teamMembers = [
    { name: `${profile.firstName} ${profile.lastName}`, email: profile.email, role: 'Administrador', avatar: profile.avatarUrl },
    { name: 'Valentina López', email: 'valentina.lopez@empresa.com.ar', role: 'Editor', avatar: 'https://readdy.ai/api/search-image?query=professional%20latin%20american%20business%20woman%20portrait%20clean%20white%20background%20corporate%20headshot&width=80&height=80&seq=team-member-1&orientation=squarish' },
    { name: 'Martín Rodríguez', email: 'martin.rodriguez@empresa.com.ar', role: 'Visor', avatar: 'https://readdy.ai/api/search-image?query=professional%20latin%20american%20business%20man%20portrait%20clean%20white%20background%20corporate%20headshot&width=80&height=80&seq=team-member-2&orientation=squarish' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-[#2D2A26] mb-2">Configuración</h1>
        <p className="text-[#6B6560]">Gestiona las preferencias y ajustes de tu cuenta</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="p-4 bg-white border border-[#E8E2D9] rounded-xl shadow-sm space-y-1">
            {[
              { id: 'profile', label: 'Perfil', icon: 'ri-user-line' },
              { id: 'security', label: 'Seguridad', icon: 'ri-shield-line' },
              { id: 'notifications', label: 'Notificaciones', icon: 'ri-notification-3-line' },
              { id: 'team', label: 'Equipo', icon: 'ri-team-line' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-left whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#C4704B]/10 text-[#C4704B] border-l-4 border-[#C4704B]'
                    : 'text-[#6B6560] hover:bg-[#F7F4EF] hover:text-[#2D2A26]'
                }`}
              >
                <i className={`${tab.icon} text-xl`}></i>
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-6">
          {activeTab === 'profile' && (
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-[#2D2A26] mb-6">Información del Perfil</h2>

              {saveSuccess && (
                <div className="mb-6 flex items-center gap-3 px-4 py-3 bg-[#7C9070]/10 border border-[#7C9070]/30 rounded-lg text-[#7C9070] text-sm font-medium">
                  <i className="ri-checkbox-circle-line text-lg"></i>
                  Cambios guardados correctamente. El topbar ya refleja tu información actualizada.
                </div>
              )}

              <div className="space-y-6">
                {/* Avatar */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <img
                      src={avatarPreview}
                      alt="Foto de perfil"
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-[#C4704B]/20"
                    />
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="absolute bottom-0 right-0 w-8 h-8 bg-[#C4704B] rounded-full flex items-center justify-center shadow-md hover:bg-[#B8601A] transition-colors cursor-pointer"
                    >
                      <i className="ri-camera-line text-white text-sm"></i>
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => fileInputRef.current?.click()}
                      className="px-4 py-2 bg-gradient-to-r from-[#C4704B] to-[#B8860B] text-white rounded-lg font-medium hover:shadow-md hover:shadow-[#C4704B]/30 transition-all mb-2 whitespace-nowrap cursor-pointer"
                    >
                      Cambiar Foto
                    </button>
                    <p className="text-sm text-[#A09890]">JPG, PNG o GIF. Tamaño máximo 2MB</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleAvatarChange}
                    />
                  </div>
                </div>

                {/* Name fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#6B6560] mb-2">Nombre</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6560] mb-2">Apellido</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#6B6560] mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-[#6B6560] mb-2">Biografía</label>
                  <textarea
                    rows={4}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all resize-none text-sm"
                  />
                </div>

                {/* Preview card */}
                <div className="p-4 bg-[#F7F4EF] rounded-xl border border-[#E8E2D9]">
                  <p className="text-xs font-semibold text-[#A09890] uppercase tracking-wider mb-3">Vista previa del perfil</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={avatarPreview}
                      alt="Preview"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-[#2D2A26]">{firstName} {lastName}</p>
                      <p className="text-sm text-[#6B6560]">{email}</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-gradient-to-r from-[#C4704B] to-[#B8860B] text-white rounded-lg font-semibold hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer"
                >
                  Guardar Cambios
                </button>
              </div>
            </div>
          )}

          {activeTab === 'security' && (
            <>
              <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
                <h2 className="text-xl font-bold text-[#2D2A26] mb-6">Cambiar Contraseña</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#6B6560] mb-2">Contraseña Actual</label>
                    <input type="password" className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6560] mb-2">Nueva Contraseña</label>
                    <input type="password" className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#6B6560] mb-2">Confirmar Nueva Contraseña</label>
                    <input type="password" className="w-full px-4 py-3 bg-[#F7F4EF] border border-[#E8E2D9] rounded-lg text-[#2D2A26] focus:outline-none focus:border-[#C4704B] focus:ring-2 focus:ring-[#C4704B]/20 transition-all text-sm" />
                  </div>
                  <button className="px-6 py-3 bg-gradient-to-r from-[#C4704B] to-[#B8860B] text-white rounded-lg font-semibold hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer">
                    Actualizar Contraseña
                  </button>
                </div>
              </div>

              <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
                <h2 className="text-xl font-bold text-[#2D2A26] mb-6">Autenticación de Dos Factores</h2>
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[#2D2A26] mb-2">Añade una capa extra de seguridad a tu cuenta</p>
                    <p className="text-sm text-[#6B6560]">Protege tu cuenta con autenticación 2FA</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-14 h-7 bg-[#E8E2D9] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#C4704B]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#C4704B]"></div>
                  </label>
                </div>
              </div>
            </>
          )}

          {activeTab === 'notifications' && (
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
              <h2 className="text-xl font-bold text-[#2D2A26] mb-6">Preferencias de Notificaciones</h2>
              <div className="space-y-2">
                {[
                  { title: 'Notificaciones por Email', description: 'Recibe actualizaciones por email sobre la actividad de tu cuenta' },
                  { title: 'Reportes Semanales', description: 'Recibe reportes de rendimiento semanales en tu bandeja de entrada' },
                  { title: 'Emails de Marketing', description: 'Recibe noticias y actualizaciones sobre nuevas funciones' },
                  { title: 'Notificaciones Push', description: 'Recibe notificaciones push para actualizaciones importantes' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start justify-between py-4 border-b border-[#F0EBE3] last:border-0">
                    <div>
                      <p className="font-medium text-[#2D2A26] mb-1">{item.title}</p>
                      <p className="text-sm text-[#6B6560]">{item.description}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer ml-6">
                      <input type="checkbox" defaultChecked={index < 2} className="sr-only peer" />
                      <div className="w-14 h-7 bg-[#E8E2D9] peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#7C9070]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#7C9070]"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'team' && (
            <div className="p-6 bg-white border border-[#E8E2D9] rounded-xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#2D2A26]">Miembros del Equipo</h2>
                <button className="px-4 py-2 bg-gradient-to-r from-[#C4704B] to-[#B8860B] text-white rounded-lg font-medium hover:shadow-md hover:shadow-[#C4704B]/30 transition-all whitespace-nowrap cursor-pointer">
                  <i className="ri-add-line mr-2"></i>
                  Invitar Miembro
                </button>
              </div>
              <div className="space-y-3">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#FDFBF7] border border-[#E8E2D9] rounded-lg hover:bg-[#F7F4EF] transition-colors">
                    <div className="flex items-center gap-4">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-medium text-[#2D2A26]">{member.name}</p>
                        <p className="text-sm text-[#A09890]">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={getRoleBadgeClass(member.role)}>{member.role}</span>
                      <button className="p-2 hover:bg-[#E8E2D9] rounded-lg transition-colors cursor-pointer">
                        <i className="ri-more-2-fill text-[#6B6560]"></i>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
