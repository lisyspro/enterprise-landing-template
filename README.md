# Enterprise Landing Template

Plantilla profesional para sitios web corporativos desarrollada con **Next.js 16**, **React**, **TypeScript** y **Tailwind CSS**.

Proyecto desarrollado por **Lisyspro** con el objetivo de crear una base reutilizable para clientes de diferentes sectores.

---

# Estado del proyecto

🚧 En desarrollo

Versión actual:

**v0.2.0**

---

# Objetivos

- Crear una plantilla reutilizable para sitios empresariales.
- Reducir el tiempo de desarrollo de nuevos proyectos.
- Facilitar la personalización mediante archivos de configuración.
- Publicar gratuitamente utilizando GitHub y Azure Static Web Apps.

---

# Tecnologías

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Git
- GitHub

---

# Estructura del proyecto

```
app/
components/
│
├── layout/
├── sections/
└── ui/

config/
content/
docs/
hooks/
lib/
public/
styles/
types/
```

---

# Componentes implementados

## Layout

- Header

## UI

- Button
- Container
- ServiceIcon

## Sections

- Hero
- Services

---

# Contenido dinámico

Actualmente la información del sitio se administra desde:

```
config/company.ts
content/navigation.ts
content/hero.ts
content/services.ts
```

Esto permite reutilizar la plantilla cambiando únicamente el contenido.

---

# Funcionalidades implementadas

- Header responsive (estructura inicial)
- Hero principal
- Botones reutilizables con variantes
- Sección de servicios
- Tarjetas dinámicas utilizando `.map()`
- Iconografía mediante Lucide React
- Separación entre contenido y presentación
- Arquitectura modular

---

# Próximos desarrollos

- Why Choose Us
- Estadísticas
- Testimonios
- Clientes
- FAQ
- Formulario de contacto
- Footer
- Responsive móvil
- Animaciones
- SEO
- Azure Static Web Apps
- GitHub Actions
- CMS basado en archivos

---

# Historial

## v0.2.0

- Arquitectura inicial del proyecto
- Header corporativo
- Hero reutilizable
- Sistema de botones
- Separación del contenido
- Sección Servicios
- Integración de Lucide React
- Primera versión del Design System

## v0.1.0

- Inicialización del proyecto
- Next.js
- Tailwind CSS
- Configuración Git
- Primer commit

---

# Autor

Desarrollado por **Lisyspro**

Tecnología para impulsar empresas.