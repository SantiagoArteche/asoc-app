export const RegisterClientPresentacional = ({
  handleChange,
  handleSubmit,
  TextField,
  Input,
  Button,
  theme,
  errors,
  values,
  Box,
  Link,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#08282b",
        color: "white",
        padding: {
          xl: "30px 340px",
          lg: "30px 180px",
          md: "30px 50px",
          sm: "20px 160px",
          xs: "10px 30px",
        },
        minHeight: "84vh",
      }}
    >
      <Box
        component="form"
        style={{ backgroundColor: "#185457", padding: 18, borderRadius: 12 }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            flexWrap: true,
            marginTop: "32px",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "10px",
            gap: { xs: 4, md: 10 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <TextField
              name="dni"
              label="DNI"
              variant="filled"
              component={"div"}
              value={values.dni}
              color="grey"
              theme={theme}
              onChange={handleChange}
              error={errors.dni ? true : false}
              helperText={errors.dni}
              sx={{
                backgroundColor: "lighter",
                borderRadius: 1,
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                  textColor: "red",
                },
              }}
            />

            <TextField
              name="nombre"
              label="Nombre"
              variant="filled"
              value={values.nombre}
              color="grey"
              onChange={handleChange}
              theme={theme}
              error={errors.nombre ? true : false}
              helperText={errors.nombre}
              sx={{
                backgroundColor: "lighter",
                borderRadius: 1,
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="apellido"
              label="Apellido"
              value={values.apellido}
              variant="filled"
              color="grey"
              error={errors.apellido ? true : false}
              helperText={errors.apellido}
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="grupoFamiliar"
              label="Grupo Familiar"
              variant="filled"
              value={values.grupoFamiliar}
              color="grey"
              error={errors.grupoFamiliar ? true : false}
              helperText={errors.grupoFamiliar}
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="direccion"
              label="Dirección"
              value={values.direccion}
              variant="filled"
              color="grey"
              error={errors.direccion ? true : false}
              helperText={errors.direccion}
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="telefono"
              label="Teléfono"
              value={values.telefono}
              variant="filled"
              color="grey"
              error={errors.telefono ? true : false}
              helperText={errors.telefono}
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2.3,
              alignItems: "center",
            }}
          >
            <Box
              variant="h1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: { xs: 32, md: 38 },
              }}
            >
              Retira
            </Box>

            <TextField
              name="mercaderias"
              label="Mercaderias"
              value={values.mercaderias}
              variant="filled"
              color="grey"
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="prendas"
              label="Prendas"
              value={values.prendas}
              variant="filled"
              color="grey"
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="zapatillas"
              label="Zapatillas"
              value={values.zapatillas}
              color="grey"
              variant="filled"
              theme={theme}
              onChange={handleChange}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="microCredito"
              label="Micro Crédito"
              value={values.microCredito}
              variant="filled"
              color="grey"
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />

            <TextField
              name="numeroCuota"
              label="Número de Cuota"
              value={values.numeroCuota}
              variant="filled"
              color="grey"
              onChange={handleChange}
              theme={theme}
              sx={{
                borderRadius: 1,
                backgroundColor: "lighter",
                ":hover": {
                  ".css-taxdav-MuiFormLabel-root-MuiInputLabel-root": {
                    color: "black",
                  },
                },

                "& .MuiInputLabel-root": {
                  color: "white",
                },
                "& .MuiFilledInput-root": {
                  color: "white",
                },
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                textAlign: "center",
                fontSize: { xs: 24, md: 32 },
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              Otros/Varios
            </Box>
            <Input
              multiline
              placeholder="Comentarios..."
              onChange={handleChange}
              color="grey"
              theme={theme}
              name="otros"
              value={values.otros}
              sx={{
                minWidth: { xs: "15rem", md: "200px", lg: "250px" },
                minHeight: "80px",
                backgroundColor: "lighter",
                paddingInline: 2,
                paddingTop: 0,
                fontSize: 17,
                borderRadius: 1.9,
                color: "white",
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "36px",
            gap: 4,
            width: "100%",
            paddingBottom: 0,
            marginBottom: 1,
          }}
        >
          <Button
            variant="contained"
            type="reset"
            theme={theme}
            sx={{
              backgroundColor: "dark",
              fontSize: { xs: 14, xl: 16 },
              ":hover": { backgroundColor: "#a2ede6" },
            }}
          >
            Restablecer
          </Button>
          <Button
            variant="contained"
            type="submit"
            theme={theme}
            sx={{
              backgroundColor: "dark",
              fontSize: { xs: 14, xl: 16 },
              ":hover": { backgroundColor: "#a2ede6" },
            }}
          >
            Enviar
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/spreadsheet" style={{ marginTop: 30 }}>
          <Button
            variant="contained"
            theme={theme}
            sx={{
              fontSize: { xs: 18, md: 22 },
              backgroundColor: "lighter",
              textTransform: "capitalize",
              ":hover": { backgroundColor: "#185457" },
              marginBottom: { sm: 2, md: 0 },
            }}
          >
            Ver Planillas
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
