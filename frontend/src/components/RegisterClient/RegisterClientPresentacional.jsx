export const RegisterClientPresentacional = ({
  handleChange,
  handleSubmit,
  TextField,
  Input,
  Button,
  theme,
  errors,
  Grid,
  Box,
  Link,
  FormControl,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: "#08282b",
        color: "white",
        padding: { xl: "30px 370px", lg: "30px 200px", md: "30px 80px" },
        minHeight: "84vh",
      }}
    >
      <form
        style={{ backgroundColor: "#185457", padding: 18, borderRadius: 12 }}
        onSubmit={handleSubmit}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: true,
            marginTop: "32px",
            alignItems: "center",
            justifyContent: "center",
            paddingY: "10px",
            gap: 10,
          }}
        >
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              gridColumn: 4,
            }}
            lg={4}
          >
            <TextField
              name="dni"
              label="DNI"
              variant="filled"
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
          </Grid>

          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignItems: "center",
              gridColumn: 4,
            }}
            lg={4}
          >
            <Box
              variant="h1"
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 38,
              }}
            >
              Retira
            </Box>

            <TextField
              name="mercaderias"
              label="Mercaderias"
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
          </Grid>
          <Grid item lg={4}>
            <Box
              sx={{
                textAlign: "center",
                fontSize: 32,
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
              sx={{
                height: "100%",
                minWidth: "250px",
                minHeight: "70px",
                width: "100%",
                backgroundColor: "lighter",
                paddingInline: 2,
                paddingTop: 0,
                borderRadius: 1.9,
                color: "white",
                "& .MuiInputLabel-root": {
                  color: "white",
                },
              }}
            />
          </Grid>
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
              fontSize: 16,
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
              fontSize: 16,
              ":hover": { backgroundColor: "#a2ede6" },
            }}
          >
            Enviar
          </Button>
        </Box>
      </form>

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
              fontSize: 22,
              backgroundColor: "lighter",
              textTransform: "capitalize",
              ":hover": { backgroundColor: "#185457" },
            }}
          >
            Ver Planillas
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
