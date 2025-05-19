/**
 * @swagger
 * /api/houses:
 *   get:
 *     summary: Lista todas as casas do usuário
 *     tags: [Casas]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de casas retornada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   description:
 *                     type: string
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 * 
 *   post:
 *     summary: Cria uma nova casa
 *     tags: [Casas]
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Nome da casa
 *               description:
 *                 type: string
 *                 description: Descrição da casa
 *     responses:
 *       201:
 *         description: Casa criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 description:
 *                   type: string
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *       401:
 *         description: Não autorizado
 *       500:
 *         description: Erro interno do servidor
 */ 