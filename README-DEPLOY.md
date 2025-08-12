# Implantação no Easypanel

## Configuração Automática

Este projeto está configurado para implantação automática no Easypanel via Git.

### Arquivos de Configuração

- **Dockerfile**: Configura o build automático
- **docker-compose.yml**: Define os serviços para implantação
- **.dockerignore**: Otimiza o processo de build

### Processo Automático

1. **Build automático**: O Dockerfile executa `npm run build` automaticamente
2. **Configuração de produção**: Define `NODE_ENV=production`
3. **Porta correta**: Usa a porta 5000 (configurável via ENV)
4. **Otimização**: Remove dependências de desenvolvimento após o build

### Para Easypanel

1. **Conecte o repositório Git**
2. **Configure as variáveis de ambiente**:
   ```
   NODE_ENV=production
   PORT=5000
   ```
3. **O build será executado automaticamente**

### Estrutura de Build

```
- Frontend (React): dist/public/
- Backend (Node): dist/index.js
- Servidor: Serve ambos na porta 5000
```

### Verificação

- ✅ Build automático configurado
- ✅ Variáveis de ambiente definidas
- ✅ Otimização de produção
- ✅ Servidor unificado (frontend + backend)