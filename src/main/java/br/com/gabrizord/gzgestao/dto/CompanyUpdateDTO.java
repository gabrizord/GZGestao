package br.com.gabrizord.gzgestao.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CompanyUpdateDTO {

    private Long id;

    @Size(max = 100, message = "Razão Social não pode ter mais de 100 caracteres")
    private String razaoSocial;

    @Size(max = 100, message = "Nome Fantasia não pode ter mais de 100 caracteres")
    private String nomeFantasia;

    @Pattern(regexp = "\\d{14}", message = "CNPJ deve ter 14 dígitos")
    private String cnpj;

    @Size(max = 20, message = "Inscrição Estadual não pode ter mais de 20 caracteres")
    private String inscricaoEstadual;

    @Size(max = 255, message = "Logradouro não pode ter mais de 255 caracteres")
    private String street;

    @Size(max = 10, message = "Número não pode ter mais de 10 caracteres")
    private String number;

    @Size(max = 100, message = "Bairro não pode ter mais de 100 caracteres")
    private String neighborhood;

    @Size(max = 50, message = "Cidade não pode ter mais de 50 caracteres")
    private String city;

    @Size(max = 2, message = "Estado deve ter 2 caracteres")
    private String state;

    @Pattern(regexp = "\\d{8}", message = "CEP deve ter 8 dígitos")
    private String postalCode;

    private Integer stateRegistrationIndicator;

    @Size(max = 7, message = "Código do Município (IBGE) não pode ter mais de 7 caracteres")
    private String municipalityCode;

    @Pattern(regexp = "^\\d{10,11}$", message = "O telefone deve ter 10 ou 11 dígitos")
    private String phoneNumber;

    @Email(message = "Email deve ser um endereço de e-mail válido")
    @Size(max = 100, message = "Email não pode ter mais de 100 caracteres")
    private String email;
}
