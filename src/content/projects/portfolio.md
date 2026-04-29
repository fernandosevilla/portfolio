---
title: 'Portfolio personal'
slug: 'portfolio'
description: 'Portfolio desarrollado con Astro, Tailwind CSS y contenido en Markdown, desplegado en VPS con Nginx.'
menuDescription: 'Astro, Tailwind y contenido en Markdown'
technologies:
  - 'Astro'
  - 'Tailwind CSS'
  - 'Markdown'
  - 'GitHub Actions'
  - 'Nginx'
  - 'Vite'
  - 'Git'
order: 1
showInMenu: true
featured: true
repositoryUrl: 'https://github.com/fernandosevilla/portfolio'
demoUrl: 'https://fernandosevilla.dev'
---

## Resumen

Este portfolio nace con la idea de tener una web personal rápida, sencilla de mantener y preparada para mostrar mi experiencia, proyectos y forma de trabajar.

Está desarrollado con Astro y Tailwind CSS, usando contenido en Markdown para poder añadir nuevos proyectos sin tocar demasiado código.

## Objetivo del proyecto

El objetivo principal era crear una web personal que no dependiera de un CMS ni de una base de datos, pero que siguiera siendo fácil de actualizar.

Quería tener una estructura simple:

- contenido versionado en Git;
- proyectos escritos en Markdown;
- imágenes locales dentro del repositorio;
- despliegue automático hacia una VPS;
- buen rendimiento y SEO.

## Tecnologías utilizadas

Para este proyecto he utilizado Astro como framework principal, Tailwind CSS para los estilos y Nginx como servidor web en producción.

El despliegue está pensado para hacerse desde GitHub Actions, conectando por SSH a la VPS y generando la build final en el servidor.

## Qué he aprendido

Este proyecto me ha servido para trabajar mejor la estructura de una web estática, el uso de colecciones de contenido en Astro y el despliegue real en una VPS con dominio, HTTPS y Nginx.